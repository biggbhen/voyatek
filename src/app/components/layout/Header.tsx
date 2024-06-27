import React from 'react';

type Props = {};

const Header = (props: Props) => {
	return (
		<div className='h-[80px] px-[50px] py-[20px] flex items-center gap-8 justify-between bg-white shadow-md'>
			<div className='border border-[red] min-h-[50px] w-1/2'></div>
			<div className='border border-[red] min-h-[50px] w-1/2'></div>
		</div>
	);
};

export default Header;
