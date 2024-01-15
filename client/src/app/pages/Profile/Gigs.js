import React from 'react'
import Layout from '../../Layout/Layout'
import Overview from '../../Component/Gigs/Overview'

const Gigs = () => {
  return (
    <div>
        <Layout>
            <main className="flex justify-center m-auto mt-2vw h-full items-cemter flex-col w-full max-w-[50vw] p-2vw bg-white border-[1px]">
                <Overview />
            </main>
        </Layout>
    </div>
  )
}

export default Gigs