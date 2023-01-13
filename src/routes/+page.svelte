<script>
	import { Button, Modal } from 'spaper';
	let showModal = false;
</script>

<h1 style="text-align: center;">Pass2Heaven</h1>
<h2 style="text-align: center;">The digital inheritance protocol</h2>

<div class="row flex-center" style="width: 40%; text-align: center">
	<div class="sm-4 col">
		<Button type="secondary">Try it Now!</Button>
	</div>
	<div class="sm-4 col align-middle">
		<a href="/" on:click={() => (showModal = true)}>Download Whitepaper</a>
	</div>
</div>

<div class="row flex-center">
	<div class="sm-4 col">
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
