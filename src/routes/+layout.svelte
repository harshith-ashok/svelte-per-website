<script>
	import Header from './Header.svelte';
	import './styles.css';
	import '../app.css';
<<<<<<< HEAD
</script>

<div class="flex flex-col justify-between">
	<Header />
	<main>
		<slot />
	</main>
=======
	import { page } from '$app/stores';
</script>

<div class="drawer lg:drawer-open bg-base-200">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="rounded-lg bg-base-300 drawer-content mt-5">
		<label for="my-drawer-2" class="btn btn-ghost drawer-button lg:hidden"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill=""
				viewBox="0 0 24 24"
				stroke="oklch(var(--in))"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h8m-8 6h16"
				/></svg
			></label
		>
		<slot />
	</div>
	<div class="drawer-side font-hand tracking-wide">
		<label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu p-4 w-60 min-h-full bg-base-200 place-content-center">
			<svg
				class="h-20 w-20"
				fill="oklch(var(--in))"
				viewBox="-64 -64 768.00 768.00"
				xmlns="http://www.w3.org/2000/svg"
				stroke="#81A1C1"
				transform="rotate(0)"
				><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
					id="SVGRepo_tracerCarrier"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke="#CCCCCC"
					stroke-width="1.28"
				></g><g id="SVGRepo_iconCarrier"
					><path
						d="M18.32 255.78L192 223.96l-91.28 68.69c-10.08 10.08-2.94 27.31 11.31 27.31h222.7c-9.44-26.4-14.73-54.47-14.73-83.38v-42.27l-119.73-87.6c-23.82-15.88-55.29-14.01-77.06 4.59L5.81 227.64c-12.38 10.33-3.45 30.42 12.51 28.14zm556.87 34.1l-100.66-50.31A47.992 47.992 0 0 1 448 196.65v-36.69h64l28.09 22.63c6 6 14.14 9.37 22.63 9.37h30.97a32 32 0 0 0 28.62-17.69l14.31-28.62a32.005 32.005 0 0 0-3.02-33.51l-74.53-99.38C553.02 4.7 543.54 0 533.47 0H296.02c-7.13 0-10.7 8.57-5.66 13.61L352 63.96 292.42 88.8c-5.9 2.95-5.9 11.36 0 14.31L352 127.96v108.62c0 72.08 36.03 139.39 96 179.38-195.59 6.81-344.56 41.01-434.1 60.91C5.78 478.67 0 485.88 0 494.2 0 504 7.95 512 17.76 512h499.08c63.29.01 119.61-47.56 122.99-110.76 2.52-47.28-22.73-90.4-64.64-111.36zM489.18 66.25l45.65 11.41c-2.75 10.91-12.47 18.89-24.13 18.26-12.96-.71-25.85-12.53-21.52-29.67z"
					></path></g
				></svg
			>
			<div class="divider"></div>
			<li class="text-2xl">
				<a
					href="/"
					class={$page.url.pathname !== '/'
						? 'font-normal self-center text-primary'
						: 'font-bold text-secondary self-center text-success'}>Home</a
				>
			</li>
			<li class="text-2xl">
				<a
					href="/about"
					class={$page.url.pathname !== '/about'
						? 'font-normal self-center text-primary'
						: 'font-bold text-secondary self-center text-success'}>About</a
				>
			</li>
			<div class="divider"></div>
			<li class="text-2xl">
				<a
					href="/pics"
					class={$page.url.pathname !== '/pics'
						? 'font-normal self-center text-primary'
						: 'font-bold text-secondary self-center text-success'}>Photography</a
				>
			</li>
			<li class="text-2xl">
				<a
					href="/music"
					class={$page.url.pathname !== '/music'
						? 'font-normal self-center text-primary'
						: 'font-bold text-secondary self-center text-success'}>Music</a
				>
			</li>
			<div class="divider"></div>
			<label class="swap swap-rotate">
				<input type="checkbox" class="theme-controller" value="cmyk" />
				<svg
					class="swap-off fill-current w-5 h-5"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					><path
						d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
					/></svg
				>
				<svg
					class="swap-on fill-current w-5 h-5"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					><path
						d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
					/></svg
				>
			</label>
		</ul>
	</div>
>>>>>>> ca89c74 (v3 commit)
</div>
