import BgCircle from "../../components/BgCircle";

const About = () => {
	return (
		<>
			<BgCircle color='white' className='absolute top-0 z-[-1]' title='ABOUT' />
			<section className='grid-layout py-[105px] relative'>
				<div className='col-start-1 col-end-7 lg:col-start-2 lg:col-end-8 '>
					<p className='mb-[45px] text-normal-xl text-brown'>
						從大學時期開始對前端慢慢產生興趣，特別是為編排填入流暢舒服的動態與互動設計，也逐漸產生好奇心並開始探索。
						喜歡與團隊討論並一同打造全面且友善的介面體驗，隨和的個性容易吸收意見，同時也能學習不同的看法，思考為想法與實作找出一個平衡。
					</p>
					<div className='border-t border-b border-brown py-[10px] flex justify-between items-center text-brown'>
						<span className='text-normal-xl'>Dosomething studio</span>
						<span>2019 - 2023</span>
					</div>
				</div>
				<img
					className='col-start-1 col-end-7 lg:col-start-9 lg:col-end-12 mt-[90px] lg:mt-auto w-[calc(100%_-_60px)] m-auto'
					src='/gray-about.svg'
					alt=''
				/>
			</section>
		</>
	);
};

export default About;
