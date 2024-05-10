<script>
	import Header from './Header.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="p-40">
	<h1 class="text-center text-8xl font-poppins p-10">
		<span class="font-black"> Harshith </span>
		<span class="font-extralight"> Ashok </span>
	</h1>
	<Header />
	<div class="bg-white/[.06] backdrop-blur-sm m-10 rounded-lg">
		<p class="text-center text-xl font-space italic p-10">
			"Student by day .. Developer by night"
		</p>
		<p class="text-center font-poppins font-normal p-10 leading-10">
			As a <span class="font-bold">17-year-old</span> tech blogger and full-stack developer, I've
			immersed myself in the world of innovation, constantly pushing the boundaries of what's
			possible in the digital realm. With a penchant for <span class="font-bold">Flutter</span>,
			I've crafted dynamic and engaging mobile applications, showcasing my prowess in both design
			and functionality. Beyond personal projects, I've lent my expertise to clients across various
			industries, crafting bespoke websites that marry cutting-edge technology with user-centric
			design principles.
		</p>
	</div>

	<!-- <ul class="menu menu-horizontal p-10">
		<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
			<a href="/about" class="font-bold text-accent uppercase underline">About</a>
		</li>
		<li>
			<a href="https://harshithashok.com/blog" class="font-bold text-accent uppercase underline"
				>Blog</a
			>
		</li>
	</ul> -->
</section>
