<script>
	import { Button, Modal } from 'spaper';
	let showModal = false;
</script>

<h1 style="text-align: center;">Pass2Heaven</h1>
<h2 style="text-align: center;">The digital inheritance protocol</h2>

<div class="row flex-center" style="width: 40%; text-align: center">
	<div class="sm-4 col">
		<a href="https://app.pass2heaven.org" class="umami--click--try-button"
			><Button type="secondary">Try it Now!</Button></a
		>
	</div>
	<div class="sm-4 col align-middle">
		<a href="/" on:click={() => (showModal = true)}>Download Whitepaper</a>
	</div>
</div>

<div class="row flex-center">
	<div class="">
		<iframe
			width="560"
			height="315"
			src="https://www.youtube.com/embed/IlGIaassRwE"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	</div>
</div>

<a
	href="https://www.producthunt.com/posts/pass2heaven?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-pass2heaven"
	target="_blank" rel="noreferrer"
	><img
		src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=376162&theme=neutral"
		alt="Pass2Heaven - Protect&#0032;your&#0032;digital&#0032;legacy | Product Hunt"
		style="width: 250px; height: 54px; float: right;"
		class="no-border"
		width="250"
		height="54"
	/></a
>

<Modal bind:active={showModal} title="Whitepaper download">
	<script
		charset="utf-8"
		type="text/javascript"
		src="//js-eu1.hsforms.net/forms/embed/v2.js"
	></script>
	<script>
		hbspt.forms.create({
			region: 'eu1',
			portalId: '26152806',
			formId: 'ab4608c4-0519-458a-a153-f214333db789'
		});
	</script>
</Modal>
