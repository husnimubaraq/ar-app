import { Layout } from 'types'

export const DefaultLayout = ({ children }: Layout) => {
  return (
    <div className="mx-auto max-w-md px-5 py-5 bg-[#f9f9f9]">
      {children}
    </div>
  )
}
