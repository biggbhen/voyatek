import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';

export default function Home() {
	return (
		<div>
			<Header />
			<Sidebar />
			<main className='flex flex-col items-center justify-between p-24'>
				<p>heyy it is voyatek</p>
			</main>
		</div>
	);
}
