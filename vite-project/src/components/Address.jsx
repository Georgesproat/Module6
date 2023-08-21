function Address({streetAddress, suburb, state, postcode, country='New Zealand'}) {
    return (
        <div className="Address componentBox">
            <div>Address:{streetAddress}</div>
            <div>Suburb:{suburb}</div>
            <div>State:{state}</div>
            <div>Postcode:{postcode}</div>
            <div>Country:{country}</div>

        </div>
    )
}
export default Address