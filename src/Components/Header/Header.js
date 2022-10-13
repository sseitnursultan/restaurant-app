import React, {useEffect} from 'react'
import {} from '@mui/material'
import {BarChart, SearchRounded, ShoppingCartRounded} from "@mui/icons-material";

function Header (){

    useEffect(() => {
        const toggleIcon = document.querySelector(".toggleMenu");
        toggleIcon.addEventListener("click", () => {
           document.querySelector(".rightMenu").classList.toggle('act');


        });
    }, []);

    return <header>
        <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2&industry=food"
             className={'logo'}
             alt=""/>

        <div className={'inputBox'}>
            <SearchRounded className={'searchIcon'}/>
            <input placeholder={'search'}/>

        </div>

        <div className={'shoppingCart'}>
            <ShoppingCartRounded className={'cart'}/>
            <div className={'cartContent'}>
                <p>2</p>
            </div>
        </div>

        <div className={'profileContainer'}>
            <div className={'imageBox'}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///8AAAAbGxv7+/v39/cXFxe7u7utra3u7u7w8PALCwvj4+Pq6uqFhYUUFBT8/PzT09NQUFA5OTnLy8udnZ0pKSmlpaXOzs4gICDExMQjIyNpaWlVVVV/f390dHRiYmKUlJTc3NxdXV2MjIwyMjI/Pz95eXlFRUVubm6YmJirq6s1NTXQyRbOAAANPklEQVR4nNVdCXfiOAwuV0LCFY5wtjSBMlD2//+/haEHluXEkuUk87237+1QsK3E1i355cUzJp0oCa6Lt910lrbjuNVqxXE7nU13o8U1SKLOxPcCfGKYB8fdf61izHajMB/WvVQ6Jkm4O8clxD3hdAmTutdMQLKc2tP2hPPiX6AyCi8s6r5xCaO6SSjC4PrqRN4Dr8tB3YTgiELe3sRwvnbrJkfDfCdG3gOHed0kPaO/+BCm744069dN2BeSPx7Ie2DfBOaayJ0+DNNVzfRtZl7pu+O0qZG+ud/3941zXTQmEsLPDq91nMchQTykh+MyDOb5YBh1X7rRcJDPg3B5PKT2Q+yrVnU6n1br+pi+BUkRz+8nwfHVTtQsOpVRd8PG4ulPR5uB3aI6g83IYsen1R3HbqlyvT6uqGpXd3UsfWyXinS5oOzlhVyDtly1DUQpwdF/L1zCa+imag3D4v367l2T24wLpt9+Srgjhoui7Tr2/Brfih6vnDUwL9oob2LT6BiYH248kt0+/aPZy5N6s5DNLCZdyAvkaGl+np52amaccOlHGHeWxhmPHqbrGhm5R2VjsjBNOhUXjcO1YaqRXyncORrmbQsfxsQgJN5z2XkQDAwqfixqGxt4zLgab9HcwFYF+Y3hxI/kZijBCF/AUmp83FKaVWmV5ri3ZCEzOn7WR9WGxSb4KjKJsXFFrXp/7Qpdh4AKhxL4XofTvYMqq87MAN0cnxILZgCV/5nbmCiTqS+iMMeW48RuMDExqzOa0Md4qoPQwAT9oVKXl4YJdhjZoj9BBvNpftoBk/5M0TxElCUhEesEhN+MWd6T7lYfKZReLQuhvrA1R3wh9mAVvjwbIPxhSh8FEYROBEarINsfpncc9lmwcnJ7ICSSrX5kDD6B3eBN97ms9wFfM3Jf3kCOwKggf2i65L5KhESa0a8/ciaTWZXFOC5MU11nNx+Un+vqNk9MzM8l9N1x5mmButAgyOqNy49/kdvQ95dGlsTWX4N1+K2vuZ0OjAV0KUkofzjn8QBHGduqzJrqN2PoooHJ/Yijx2BkHU0Nf7dcmzY9w5qgZxHt6ZP0tUGsnlNX+xmdEwxPZAJvO4WuXOqeDZvdrrF3Ohs1+Y9LENMZjmah78p/o/FRy739BNQStwJ9t2g8o5SfdjRZT1atdFljD3K6hXam0jKuqIXQyI+V/wZZ02lHscRNNoTfJ6vsuROBrRY51KMZQcWcH8Z5ZlTPts6JqaCeigmUioXMRvPMkLmbraJmxok6JWnR0M4hO5QNQSISnCd9NX8VcsGYOpcbl/kGmdtAl5l5ALjFqFNN2iIUtqmHH74Zo9MGfpEs64vyiSgg22pQ7pvEKmRK1FwAxPXBBHXmHPzewK2g7CSfeM1eY4Nsj0Jmg7NTyEipRiEewuSBKqWgGEbZKRQrZJNC7hUyWAD02mCq0R58h8rQckEC6crbBPz+j/4VaC+Tg3ISwv4XZCYAQ526dgpsyVIjBAI+RFdQKYRmn25igC+QX2FZ9jcVZM8UeIkp/DvQt2Kyd684/ZsOMq+JgO4GFTKwQPIxkN6kdE4HGQEwoiIwPNl/KKNzP4Osf0NeqRqaIM5B9z6ZE4i5yMhrAPtQjSUBfYbu85KvYyuw8gwA+0ixMIDOrPGhUnQJZWiWSOnxU7CIZ/0dcFq6D1jOrMAXaAeguj1LPLDH6O51LPXGFXQPOHjOT/s8Mv7FFkgCiDMYUWfwpn6Feug8tDwrZSUdGgkBwRhGgpGU/+IZjMxR4NC+/PxB/ZyRfMMIF5YDMYBKAaTe98eATXCyLqBxKQFGyBRu029mBZgsJ3+0KRSCbfot9tRXu2UM3BgKX9Tsga8DB8wCVllYU84hjEQ9PgTHkJWjJOvCeICVhQ9008dBBKeTlU5n14CABlZFAHArPrimGjNkKDQv8j6MO3ipgipTeUhENR7Dq9DIPVDIK/xTz8v5/hFgsLzWDD5sC17luxpeiu+D5Oq4vNLMSVnzQDr+45WOgWd93wgqo/lglqRJuvQfoHtS/qKjdkq5sxp14/IYjbEI0wHcShjVgrqzlZ32CQfyJjC3wlh9YzvtBLHT1QmNLq0w5i5EFVyz275VB2aXvkpbiOzyI7CbOtCDwS5Mk4yP3sF+1MAxHEGSueNCrd4VLAvnAfik1G1L95T+QFY1dShTVb2mwctV+TcnZf0LMPThBoeiIVU0X4GB79IzRJLXuNQvqybiAqzLpUuBpG7q0o1JVT5GQOA7FRjKvUSnSlVVDd0Be8qpAA+IVgc41RqrvHMKUr3cCtGlfPtupaqqI2MGeKtjuxmZbp8cl/QTcmWw9EVNmHRs3CPDbEQXsQYas2tHOYl96lptrDotxoBC56Zk7o5Tlpv0GarqEQMtzr1hgmsq+9l5BcChCCh0Ht41os+I3msopFCg6UXfhcRUoK0IfIfC5/CloLVbOdYSvTPhOZTlpX/RR/pNWGEr0hgG8lJRefiFDi9/aCrTGAbKQ1Gd5gecWJRU+7dcGTUV1UufQA/ViLUVgXqpoG2hoE/bqVO53kzQthC0D+FM9jVCnFp1I6B9qJ4YsU6Ed3Rt84gy0fZv0MaX89MgiGxozIQ79EI/jZivDcckLC7Nn4Xi/Rehr03MX2pEnpm08XPmo8Er9JeK+byLMAhG0PyfvgWemlar8yRicYtSdKNVuPy8YxmuIn+tJbW4hVTsqTHQYk9S8cPGQIsfCsWAmwMtBiwUx28O9Dg+yMWot7WlO5BcjFw9mQ29mc8aSD6NSE5Uc4DkRInktTUHSF4byNT/11kNlpsokV/aGKD5pRI5wo0BmiMMVFUf139UBzTPWyJXvzFAc/Ul6i1K0OkPktV884v5Khn0PSgXhnoLgZoZHFESLEfvJ7OXf316Hy2DRI65GWpmBOqeALrDzeeecoHnaZ8FQwFCDXVPArVrTxhsRgdebGZ9GG3clEZj7Zp7/eEXomDvejPwxz7gMwJAyK+x615DekdeeCMcBekn00NlrCF1rwOe5EduSM1A5CihuxnNdcCutdyDTx/XAs8y6qEEYu9qJp7mNd34uzX3lWbLFdTj83sqdEPpFHYVMeEe+aKeCty+GNGnX/ruGFvHNQr7YsBeWVYMe5LxuulSEWdW+h3sTApePqM/jXyZjBk2Ub/i/jT0HkNzV9FOQ1rKGsp6DBH7REU+SpuLcSl56EBU6PKA1OvLR8loOQojDh2gcejlDIR+bV3prle2KLoMrbxfm5Y3aVSaVjJdSjnoGUNjFj33rPsmVslCdZi2lk3fRC1JG98S1bMYFRd0VVCe41Y8fImYTOxyrgSQxQl78nb9S1/g6nXVfihf0EzHf7pxl4OvmDpml/YRHsjagFxstUcPmbtRPYBZIcB28VF0zwMg0boXtNYaUO3nPfBvR9giVkm07+etdc57ZjZO+dvSUPLBCT3ZC1vU+3BU8HGaWC1aB5R2v3cjyJQ0yeHnrGl3IxT3JtJKXb8jUT4asrkh+1qZdr8FzQb5PrUuN6v4woPTa1XyZY5C/J4Z7MLO+nGX/NqNIeXpMuhdQU07hA/cjyL9riDkvqdPkGXbHFz1JgA2LdD0m2J8NLaUgb4yK++q7qKoz+Qthr4uy9RKbW/3GsloWrHmrrX1ZOv3H7abSGKsvcKedda/Lv2aYTap0NdEiOPohVnNO4r6ikgpebod0ati1QTo6yHdJYsYu/qxrhUI8yPGU3WRoR/sGoGwPnIOvm5MjJtDYlvfUBmVQEwXjZtyFpEtyskf6ercuCFnESFwzcqnGiL0NGGjImsYM9O4sE6B67q1mxjLKGPXMmFhwpoVOJQXOJQyYXGmWlkqwkQdS3v1K9pvJNbHb9CpeRfb/wDzscU1HUZ83syNQEN3hF4dknGMTipQAYOSWMNO7aFTOnV2+wbqDI7RM+8PMc7DMwkCcXZzY2tV7tQezsAdmcwv8OQEw2P1ANNMgh0gDBlC40qYqvFAiNYsJ4ZJKjiNhg3aGguXnQ8NvqjY83HsmY7CVqTh0zO6plxnn1vVzLGnPooIjSFEXzTGa+MZ8FRgZw4i9jycx3HB/vfWF2FgzpqN27LdrtsF++LDZ715QQ+veC0mH+Mi+nzXYm+KWGe7LRDDiXvrIgu0572cPipMnx33HHdru118pN+FWy6hKEmBjrcmGW1B3rZkD1TUeiXaFS+j1VqPtzFtv8bxdlz69vfVVdJvyjPAeuO1rQy5yYU1bt4q+Ki0oUXH6p6AcXxTBrZFe/a2LbdtO0fzouquK30tZ8OA23Zdp71Wb5veaLn94/Zf+/b/t0/Sdct6L++r4DAQib+qPIjXutpXzavJJDrX2VFm7j+z/VR3x5xE/i6rZ0yb0Igk93GR7AN7H10HOegvfJTqpZm/BoAMzG2Fhy12Yg1/xdAN5TjrNGxop6PBVUJEvi4b3VEtCty26yWsQ3mhIlnyXuV58S913kzCy5lgP50u4b9E3TeGeXDclRWizHajMBf37laKTpQE18VoN52l7b+mxM22SGfT3WhxDZLIv0n0P3a/zhZzrQgrAAAAAElFTkSuQmCC" alt=""/>
            </div>

            <h2 className={'userName'}>
                Nursultan Seitnur
            </h2>
        </div>

        <div className={'toggleMenu'}>
            <BarChart className={'toggleIcon'}/>
        </div>


    </header>
}

export default Header