import React from 'react';

type Props = {};

const Sidebar = (props: Props) => {
	return (
		<div className='w-[200px] fixed top-[100px] bottom-0 left-[20px] bg-white p-5 rounded-md shadow-md flex flex-col justify-between'>
			<div>
				<p className='text-sm'>settings</p>
				<ul className='border border-[red] min-h-[500px]'></ul>
			</div>
			<div className='border border-[red] min-h-[100px]'></div>
		</div>
	);
};

export default Sidebar;
