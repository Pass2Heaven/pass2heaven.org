<script>
	import 'papercss/dist/paper.min.css';
	import { Navbar } from 'spaper';
	import MetaHead from '../components/MetaHead.svelte';
</script>

<MetaHead />

<Navbar border={false}>
	<h3 slot="brand" style="display:inline-flex">
		<img src="mark.svg" class="no-border sm-6" alt="Pass2Heaven logo" />
		<a href="/" style="border-bottom-style: none; margin-top: 35px">Pass2Heaven</a>
	</h3>
	<ul class="inline" style="margin-top: 35px">
		<li><a href="/how">How it Works</a></li>
		<li><a href="/faq">FAQ</a></li>
	</ul>
</Navbar>
<body>
	<slot />
	<script
		type="text/javascript"
		id="hs-script-loader"
		async
		defer
		src="//js-eu1.hs-scripts.com/26152806.js"
	></script>
</body>
