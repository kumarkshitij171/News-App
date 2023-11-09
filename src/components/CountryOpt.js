import React from 'react'
const CountryOpt = (props) => {
    const { setCountry } = props
    return (
        <>
            <label className='d-flex'>
                <span>Select Country: </span>
                <select className='mx-2 px-2 rounded' name="selectedCountry" onChange={(e) => { setCountry(e.target.value) }}>
                    <option value="in">India</option>
                    <option value="ae">Dubai</option>
                    <option value="us">Usa</option>
                    <option value="cn">China</option>
                    <option value="se">Sweden</option>
                </select>
            </label>
        </>
    )
}

export default CountryOpt
