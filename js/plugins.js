Reveal.initialize({
        // Display the page number of the current slide
        slideNumber: true,
        slideNumber:"c/t",
        // Push each slide change to the browser history
        history: false,

        // Vertical centering of slides
        center: false,
        // Transition style
        transition: 'fade', // none/fade/slide/convex/concave/zoom
        // The "normal" size of the presentation, aspect ratio will be preserved
        // when the presentation is scaled to fit different resolutions. Can be
        // specified using percentage units.
        width: 1600,
        height: 1000,

        math: {
          mathjax: '../MathJax-src/components/src/tex-mml-svg.js',

          jax: ["input/TeX","output/HTML-CSS"],

          tex2jax: {
            inlineMath: [['\\(','\\)']],
            displayMath: [['\\[','\\]']],
            balanceBraces: true,
            processEscapes: false,
            processRefs: true,
            processEnvironments: true,
            preview: 'TeX',
            skipTags: ['script','noscript','style','textarea','pre','code'],
            ignoreClass: 'tex2jax_ignore',
            processClass: 'tex2jax_process'
          },
        },

        // Optional reveal.js plugins

        dependencies: [
          { src: 'reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },

          { src: 'reveal.js/plugin/math/math.js', async: true },
          { src: 'reveal.js/plugin/notes/notes.js', async: true },
          { src: 'reveal.js/plugin/elapsed-time-bar/elapsed-time-bar.js'},
          { src: 'reveal.js/plugin/pdfexport/pdfexport.js', async: true },
          { src: 'reveal.js-plugins/mathsvg/math.js', async: true },
          { src: 'reveal.js-plugins/menu/menu.js', async: true },
          { src: 'reveal.js-plugins/chalkboard/chalkboard.js', async: false},
        ],

        pdfSeparateFragments: false,
        allottedTime: 75 * 60 * 1000, // 3 minutes
        pdfExportShortcut: 'E',
        chalkboard: {
                      src: "ece6254sp20-lecture4-slides.json",
                    readOnly: false,
        	theme: "whiteboard",
          toggleChalkboardButton: { left: "30px", bottom: "60px", top: "auto", right: "auto" },
          toggleNotesButton: { left: "30px", bottom: "90px", top: "auto", right: "auto" },
          toggleBlackButton: { left: "30px", bottom: "120px", top: "auto", right: "auto" },
          toggleBlueButton: { left: "30px", bottom: "150px", top: "auto", right: "auto" },
          toggleRedButton: { left: "30px", bottom: "180px", top: "auto", right: "auto" },
          toggleDownloadButton: { left: "60px", bottom: "33px", top: "auto", right: "auto" },
        },
        keyboard: {
          67: function() { RevealChalkboard.toggleNotesCanvas() },	// toggle notes canvas when 'c' is pressed
          66: function() { RevealChalkboard.toggleChalkboard() },	// toggle chalkboard when 'b' is pressed
          46: function() { RevealChalkboard.clear() },	// clear chalkboard when 'DEL' is pressed
          8: function() { RevealChalkboard.reset() },	// reset chalkboard data on current slide when 'BACKSPACE' is pressed
          68: function() { RevealChalkboard.download() },	// downlad recorded chalkboard drawing when 'd' is pressed
		  88: function() { RevealChalkboard.colorNext() },	// cycle colors forward when 'x' is pressed
		  89: function() { RevealChalkboard.colorPrev() },	// cycle colors backward when 'y' is pressed
        },
		pen: ['crosshair'],
      });
