import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useGlobal } from '../../../contexts/global'

const TableTitle = [
  { value: 'name', label: 'Name' },
  { value: 'address', label: 'Address' },
  { value: 'phone', label: 'Phone' },
  { value: 'website', label: 'Website' },
  { value: 'edit', label: 'Edit' },
]

function UserTable() {
  const router = useRouter()
  const { userList, filteredUserList, setFilteredUserList } = useGlobal()

  useEffect(() => {
    setFilteredUserList(userList)
  }, [userList])

  const escapeRegexCharacters = (str) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  }

  const onChangeSearchInput = (e) => {
    const { value } = e.target
    const escapedValue = escapeRegexCharacters(value.trim())

    if (value.length === 0) {
      setFilteredUserList(userList ?? null)
      return []
    }

    if (escapedValue === '') {
      return []
    }

    const regex = new RegExp('' + escapedValue, 'i')

    const filtered = userList.filter((item) => regex.test(item.email) || regex.test(item.name))
    setFilteredUserList(filtered ?? null)
  }

  const openExternalLink = (url) => {
    window.open(`https://${url}` ?? '', '_ blank')
  }

  const openUserPost = (person) => {
    router.push(`/profile/${person?.id}/posts`)
  }
  return (
    <div>
      <div className='mb-8'>
        <div className='relative text-gray-600'>
          <input
            type='search'
            name='serch'
            placeholder='Search'
            onChange={(e) => onChangeSearchInput(e)}
            className='bg-white w-full h-12 px-5 shadow-sm pr-10 py-3 border-primary rounded-full text-sm focus:outline-none'
          />
          <button type='submit' className='absolute right-0 top-0 mt-3 mr-4'></button>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    {TableTitle.map((tableItem) => (
                      <th
                        key={tableItem.value}
                        scope='col'
                        className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                      >
                        {tableItem?.label ?? ''}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  {filteredUserList &&
                    filteredUserList.map((person) => (
                      <tr key={person.email}>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='flex items-center'>
                            <div className='flex-shrink-0 h-10 w-10'>
                              <img
                                className='h-10 w-10 rounded-full'
                                src={'/images/png/AvatarImage.png'}
                                alt='avatar'
                              />
                            </div>
                            <div className='ml-4'>
                              <div className='text-sm font-medium text-gray-900'>{person.name}</div>
                              <div className='text-sm text-gray-500'>{person.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='text-sm text-gray-900'>{`${person?.address?.street} - ${person?.address?.zipcode} ${person?.address?.city} `}</div>
                          <div className='text-sm text-gray-500'>{person.department}</div>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                            {person?.phone}
                          </span>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <span
                            className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 cursor-pointer'
                            onClick={() => openExternalLink(person.website)}
                          >
                            {person?.website}
                          </span>
                        </td>

                        <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                          <a
                            className='text-indigo-600 hover:text-indigo-900 cursor-pointer'
                            onClick={() => openUserPost(person)}
                          >
                            View all
                          </a>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserTable
