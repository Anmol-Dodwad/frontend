import Business from "./Business";
import React from "react";

function BusinessList() {
    const businessList = [<Business/>,<Business/>,<Business/>,<Business/>,<Business/>,<Business/>] ;

    return (
        <div id='businessList'>
            {businessList.map(bl => bl)}
        </div>
    );
}

export default BusinessList;