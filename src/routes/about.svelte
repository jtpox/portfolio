<script>
</script>

<svelte:head>
	<title>About me - Jian Ting</title>
</svelte:head>

<div class="about-wrapper">
    <div class="page-image"></div>
    <div class="page-content">
        <div class="container-fluid">

            <div class="row">
                <div class="col-md-4 text-center">
                    <img src="build/assets/img/profile.jpg" class="rounded-circle mx-auto d-block" height="200"
                        width="200" />
                    <h4>I'm Jian Ting</h4>
                    <p>
                        A full stack web developer from Singapore.
                    </p>
                    <p>
                        A Gunpla builder and mechanical keyboard enthusiast.
                    </p>
                    <p>
                        <a href="https://twitter.com/jtpox" class="btn btn-lg btn-light rounded-circle"
                            data-toggle="tooltip" title="Twitter: @jtPox"><i class="bi bi-twitter"></i></a>
                        <a href="https://github.com/jtpox" class="btn btn-lg btn-secondary rounded-circle"
                            data-toggle="tooltip" title="Github: jtpox"><i class="bi bi-github"></i></a>
                    </p>
                </div>

                <div class="col-md-4">
                    <h4>Education</h4>

                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Temasek Polytechnic</h5>
                            <h6 class="mb-2 text-muted">Apr 2017 - Apr 2020</h6>
                            <p class="card-text">
                                Enrolled in the Diploma for Information Technology.
                            </p>
                            <p>
                                Skills that were taught includes:
                            </p>
                            <ul>
                                <li>Android App Development <code>Java</code></li>
                                <li>Full Stack Web Development <code>NodeJS, MongoDB</code></li>
                                <li>Progressive Web Apps <code>Ionic Framework</code></li>
                                <li>Machine Learning <code>Python</code></li>
                            </ul>
                        </div>
                    </div>

                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Institute of Technical Education</h5>
                            <h6 class="mb-2 text-muted">Jan 2015 - Jan 2017</h6>
                            <p class="card-text">
                                Enrolled in the Higher Nitec for Information Technology.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <h4>Experience</h4>

                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title"><a href="https://justbook.la">JustBook.la</a></h5>
                            <h6 class="md-2 text-muted">May 2022 - Present</h6>
                                <p class="card-text">
                                    A project that I did during my National Service in the Singapore Police Force. JustBook.la is a simple booking platform made specifically to help the National Police Cadet Corp (NPCC) in their event management.
                                </p>
                                <p class="card-text">
                                    Built using
                                </p>
                                <ul>
                                    <li>Svelte</li>
                                    <li>TailwindCSS</li>
                                    <li>Firebase</li>
                                </ul>
                        </div>
                    </div>

                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Enchant.moe</h5>
                            <h6 class="md-2 text-muted">May 2020 - May 2021</h6>
                                <p class="card-text">
                                    A personal project during the Covid-19 Circuit-Breaker in Singapore. A
                                    real-time VOD streaming project using the HLS standard.
                                </p>
                                <p class="card-text">
                                    Built using
                                </p>
                                <ul>
                                    <li>NodeJS</li>
                                    <li>MongoDB</li>
                                    <li>Bulma CSS Framework</li>
                                    <li>VueJS</li>
                                </ul>
                                <p>
                                    The HLS program can be found on <a
                                    href="https://github.com/jtpox/Enchanter">Github</a>.
                                </p>
                        </div>
                    </div>

                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Hydro6</h5>
                            <h6 class="mb-2 text-muted">February 2019 - March 2019</h6>
                            <p class="card-text">
                                Working as a freelancer, I was asked to commission a design for the local
                                startup's website.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

<style lang="scss">
	@import "../scss/about.scss";
</style>