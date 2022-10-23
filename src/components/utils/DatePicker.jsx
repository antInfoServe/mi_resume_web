import React from "react";

const DatePicker = ({ staticText, handleChange, id, date }) => {
    return (
        <div className='box_flex_row_left'>
            <div>
                <p className='text_regular'>{staticText[id]} {staticText.month}</p>
                <select name='month' id={`${id}Month`} className='dropdown_mini' onChange={handleChange}>
                    {
                        Array.from({ length: 12 }, (_, i) => i + 1).map((ele, index) => <option key={index}>{ele}</option>)
                    }
                </select>
            </div>
            <div>
                <p className='text_regular'>{staticText[id]} {staticText.year}</p>
                <select name='year' id={`${id}Year`} className='dropdown_mini' onChange={handleChange}>
                    {
                        Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i).map((ele, index) => <option key={index}>{ele}</option>)
                    }
                </select>
            </div>
        </div>
    )
}

export default DatePicker