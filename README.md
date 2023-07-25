

#### DEMO
[Demo react-image-height-width-resizer](https://stackblitz.com/edit/stackblitz-starters-hpsetq?file=src%2FApp.tsx)




## Install Package
```sh
npm i react-image-height-width-resizer
```

## Features
You can resize image  height width inline using mouse drag. 

###### Example
![react-richtextbox](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2kzcXd3ajI2b2dpYTUxMWt6dXI3cGViMmFkeWppYzk3MGJrdzlnNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nXLPGdPMwdQSS1JSk9/giphy.gif)

``` jsx static
import  *  as  React  from  'react';
import  './style.css';
import  ImageResizer  from  'react-image-height-width-resizer';

  

export  default  function  App() {
	return (
			<>
				<ImageResizer 
					src={"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000"}
					height={200} //optinal default 100
					width={400} //optinal default 100
					className={'image'} // optinal
					onClick={(e) => {
					console.log('Image click')
				}}
				/>
			</>		
	
		);

}
```

