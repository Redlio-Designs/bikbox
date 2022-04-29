import React from 'react'
import TitleAndDescription from '../components/TitleAndDescription/TitleAndDescription'

export default function Home() {
    return (
        <>

            <div className='container'>

                {/* section 2 built by fox */}
                <section className='facebook-specialist'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <TitleAndDescription
                                title="Built by Ex-Facebook specialists with over $1B in managed spend"
                                desc="Blkbox is proud to be a leader in AI driven performance marketing and is featured and recognized by the best in the industry." />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
