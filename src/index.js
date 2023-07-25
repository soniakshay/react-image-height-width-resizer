import React,{useEffect} from "react";

import './style.css'

const ImageResizer = ({
                                className = '',
                                src,
                                height = '100px',
                                width = '100px',
                                style,
                                ...props
                             }) => {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let originalWidth, originalHeight;
    let originalX, originalY;
    const rendomID = generateString(5);
    const id =  `image-${rendomID}`
    const containerId = `imageContainer-${rendomID}`;

    const startResize = (e,element) => {

        const image =  document.querySelectorAll('.selected img');
        originalWidth  = image[0].clientWidth;
        originalHeight =  image[0].clientHeight;
        originalX = e.clientX;
        originalY = e.clientY;
        const ele =  document.querySelectorAll(`#${containerId} .${element}`)
        ele[0].classList.add('drag');
    }
    const resizeImag = (e,ele) => {
            const image =  document.querySelectorAll('.selected img');
            if(image && image.length) {
                const newWidth = originalWidth + (e.clientX - originalX);
                const newHeight = originalHeight + (e.clientY - originalY);
                image[0].style.width  = `${newWidth}px`;
                image[0].style.height  = `${newHeight}px`;
            }

        // if(image) {

        // }

    }

    useEffect(() => {

        document.addEventListener('mousemove',(e) => {


            const element =  document.querySelectorAll(`.selected .topleft`);
            const element1 =  document.querySelectorAll(`.selected .topright`);
            const element2 =  document.querySelectorAll(`.selected .bottomright`);
            const element3 =  document.querySelectorAll(`.selected .bottomleft`);


            if((element.length && element[0].classList.contains('drag')) ||
                (element1.length && element1[0].classList.contains('drag')) ||

                (element2.length && element2[0].classList.contains('drag')) ||

                (element3.length && element3[0].classList.contains('drag'))
            ) {
                        resizeImag(e)
            }





        });
        document.addEventListener('mouseup',(e) => {
            const element =  document.querySelectorAll('.dragHandler');
            for(let i=0; i <element.length; i++)
            {
                element[i].classList.remove('drag')
            }
        });


        document.addEventListener('mouseup',(e) => {
            const element =  document.querySelectorAll('.dragHandler');
            for(let i=0; i <element.length; i++)
            {
                element[i].classList.remove('drag')
            }
        });

        document.addEventListener('click',(e) => {

            const element =  document.querySelectorAll('.selected');
            for(let i=0; i <element.length; i++)
            {
                element[i].classList.remove('selected')
            }

        })





    },[]);


    function generateString(length) {
        let result = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result.trim();
    }
    return  (
        <div className="imageContainer" id={containerId}>
            <div className={'dragHandler topleft'}
                 onClick={(e) => {
                     e.stopPropagation();
                 }}
                 onMouseDown={(e) => {
                startResize(e,'topleft')
            }}



            >

            </div>
            <div className={'dragHandler topright' }
                 onClick={(e) => {
                    e.stopPropagation();
                 }}
                 onMouseDown={(e) => {
                     startResize(e,'topright')
                 }}

            >

            </div>
            <div className={'dragHandler bottomleft'}
                 onClick={(e) => {
                     e.stopPropagation();
                 }}

                 onMouseDown={(e) => {
                     startResize(e,'bottomleft')
                 }}

            >

            </div>
            <div className={'dragHandler bottomright'}

                 onClick={(e) => {
                     e.stopPropagation();
                 }}
                 onMouseDown={(e) => {
                startResize(e,'bottomright')

            }}

            >

            </div>

            <img
                {...props}
                className={className}
                src={src}
                style={{
                    height:height,
                    width:width,
                    ...style
                }}
                 onClick={(e) => {
                     e.stopPropagation();
                         const element =  document.querySelectorAll('.selected');
                         for(let i=0; i <element.length; i++)
                         {
                             element[i].classList.remove('selected')
                         }
                     const ele =  document.getElementById(containerId);
                     ele.classList.add('selected')
                    if(props?.onClick) {
                        props.onClick(e);
                    }


                 }}






            />

        </div>
    )
}
export default ImageResizer;
