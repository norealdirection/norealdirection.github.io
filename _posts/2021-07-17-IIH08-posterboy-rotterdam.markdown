---
layout: post
title: "Woonopstand"
subtitle: "Onze postercampagne voor de posterboy van de wooncrisis."
categories: home blog
image: images/posts/IIH08/Kurvers-blij.jpg
tags:
 - Happening
 - Woonopstand
 - Wooncrisis
 - Gentrificatie

---

<article class="post" style="
	{%- if page.backgroundcolor -%}
		background-color:{{ page.backgroundcolor }};
	{%- endif -%}
	{%- if page.textcolor -%}
		color:{{ page.textcolor }};
	{%- endif -%}
	">

	<header class="post-header">
		{%- if page.image -%}
			<div class="post-hero" style="background-image:url('{{ page.image | relative_url }}');">
		{%- else -%}
			<div class="post-hero">
		{%- endif -%}
				<div class="wrapper" style="
						{%- if page.textcolor -%}
							color:{{ page.textcolor }};
						{%- endif -%}">
					<h1 class="post-title p-name" itemprop="name headline">{{ page.title | escape }}</h1>
				</div>

				{%- if page.imagecredits -%}
				<span class="post-hero-credits">Image credits: {{ page.image-credits }}</span>
				{%- endif -%}
		</div>
	</header>

	<div class="wrapper">
		<div class="post-content">
			{{ content }}
		</div>
	</div>

	<div class="poster-downloads">
		<div class="wrapper">
			<div class="post-content">
				<h1 class="poster-downloads-title">Download posters</h1>
				<p class="poster-downloads-text">Voor de woonopstand campagne stellen we een aantal posters voor download beschikbaar. Klik op de poster om ze als high-res PDF te downloaden, <a href="/images/pages/branding-toolkit/downloads/woonopstand-posters.zip">of download ze gewoon allemaal</a>.</p>
				<div class="posters-container">
					<a href="/images/pages/branding-toolkit/downloads/IIH08-posters-Penthouse bewoners.pdf" download="Penthouse-bewoners.pdf" class="poster-image-container">
						<img class="poster-image" src="/images/pages/branding-toolkit/IIH08-posters-Penthouse bewoners.jpg" alt="Penthouse bewoners">
						<span class="poster-download-button">Download</span>
					</a>
					<a href="/images/pages/branding-toolkit/downloads/IIH08-posters-Markt boven mens.pdf" download="Markt-boven-mens.pdf" class="poster-image-container">
						<img class="poster-image" src="/images/pages/branding-toolkit/IIH08-posters-Markt boven mens.jpg" alt="Markt boven mens">
						<span class="poster-download-button">Download</span>
					</a>
					<a href="/images/pages/branding-toolkit/downloads/IIH08-posters-Nieuw Rotterdam.pdf" download="Nieuw-Rotterdam.pdf" class="poster-image-container">
						<img class="poster-image" src="/images/pages/branding-toolkit/IIH08-posters-Nieuw Rotterdam.jpg" alt="Nieuw Rotterdam">
						<span class="poster-download-button">Download</span>
					</a>
					<a href="/images/pages/branding-toolkit/downloads/IIH08-posters-Volkswijk te koop.pdf" download="Volkswijk-te-koop.pdf" class="poster-image-container">
						<img class="poster-image" src="/images/pages/branding-toolkit/IIH08-posters-Volkswijk te koop.jpg" alt="Volkswijk te koop">
						<span class="poster-download-button">Download</span>
					</a>
				</div>
			</div>
		</div>

	</div>

</article>