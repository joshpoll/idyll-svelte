<style>
  @charset "UTF-8";
  /* Import ET Book styles
   adapted from https://github.com/edwardtufte/et-book/blob/gh-pages/et-book.css */
  @font-face {
    font-family: "et-book";
    src: url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-roman-line-figures/et-book-roman-line-figures.eot");
    src: url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-roman-line-figures/et-book-roman-line-figures.eot?#iefix")
        format("embedded-opentype"),
      url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-roman-line-figures/et-book-roman-line-figures.woff")
        format("woff"),
      url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-roman-line-figures/et-book-roman-line-figures.ttf")
        format("truetype"),
      url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-roman-line-figures/et-book-roman-line-figures.svg#etbookromanosf")
        format("svg");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "et-book";
    src: url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.eot");
    src: url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.eot?#iefix")
        format("embedded-opentype"),
      url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.woff")
        format("woff"),
      url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.ttf")
        format("truetype"),
      url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.svg#etbookromanosf")
        format("svg");
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: "et-book";
    src: url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-bold-line-figures/et-book-bold-line-figures.eot");
    src: url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-bold-line-figures/et-book-bold-line-figures.eot?#iefix")
        format("embedded-opentype"),
      url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-bold-line-figures/et-book-bold-line-figures.woff")
        format("woff"),
      url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-bold-line-figures/et-book-bold-line-figures.ttf")
        format("truetype"),
      url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-bold-line-figures/et-book-bold-line-figures.svg#etbookromanosf")
        format("svg");
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: "et-book-roman-old-style";
    src: url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.eot");
    src: url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.eot?#iefix")
        format("embedded-opentype"),
      url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.woff")
        format("woff"),
      url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.ttf")
        format("truetype"),
      url("https://cdn.rawgit.com/edwardtufte/tufte-css/gh-pages/et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.svg#etbookromanosf")
        format("svg");
    font-weight: normal;
    font-style: normal;
  }
  :global(.ReactTable) {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  :global(.ReactTable *) {
    box-sizing: border-box;
  }
  :global(.ReactTable .rt-table) {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    width: 100%;
    border-collapse: collapse;
    overflow: auto;
  }
  :global(.ReactTable .rt-thead) {
    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  :global(.ReactTable .rt-thead.-headerGroups) {
    background: rgba(0, 0, 0, 0.03);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
  :global(.ReactTable .rt-thead.-filters) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
  :global(.ReactTable .rt-thead.-filters .rt-th) {
    border-right: 1px solid rgba(0, 0, 0, 0.02);
  }
  :global(.ReactTable .rt-thead.-header) {
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.15);
  }
  :global(.ReactTable .rt-thead .rt-tr) {
    text-align: center;
  }
  :global(.ReactTable .rt-thead .rt-th),
  :global(.ReactTable .rt-thead .rt-td) {
    padding: 5px 5px;
    line-height: normal;
    position: relative;
    border-right: 1px solid rgba(0, 0, 0, 0.05);
    -webkit-transition: box-shadow 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition: box-shadow 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: inset 0 0 0 0 transparent;
  }
  :global(.ReactTable .rt-thead .rt-th.-sort-asc),
  :global(.ReactTable .rt-thead .rt-td.-sort-asc) {
    box-shadow: inset 0 3px 0 0 rgba(0, 0, 0, 0.6);
  }
  :global(.ReactTable .rt-thead .rt-th.-sort-desc),
  :global(.ReactTable .rt-thead .rt-td.-sort-desc) {
    box-shadow: inset 0 -3px 0 0 rgba(0, 0, 0, 0.6);
  }
  :global(.ReactTable .rt-thead .rt-th.-cursor-pointer),
  :global(.ReactTable .rt-thead .rt-td.-cursor-pointer) {
    cursor: pointer;
  }
  :global(.ReactTable .rt-thead .rt-th:last-child),
  :global(.ReactTable .rt-thead .rt-td:last-child) {
    border-right: 0;
  }
  :global(.ReactTable .rt-thead .rt-resizable-header) {
    overflow: visible;
  }
  :global(.ReactTable .rt-thead .rt-resizable-header:last-child) {
    overflow: hidden;
  }
  :global(.ReactTable .rt-thead .rt-resizable-header-content) {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  :global(.ReactTable .rt-thead .rt-header-pivot) {
    border-right-color: #f7f7f7;
  }
  :global(.ReactTable .rt-thead .rt-header-pivot:after),
  :global(.ReactTable .rt-thead .rt-header-pivot:before) {
    left: 100%;
    top: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }
  :global(.ReactTable .rt-thead .rt-header-pivot:after) {
    border-color: rgba(255, 255, 255, 0);
    border-left-color: #fff;
    border-width: 8px;
    margin-top: -8px;
  }
  :global(.ReactTable .rt-thead .rt-header-pivot:before) {
    border-color: rgba(102, 102, 102, 0);
    border-left-color: #f7f7f7;
    border-width: 10px;
    margin-top: -10px;
  }
  :global(.ReactTable .rt-tbody) {
    -webkit-box-flex: 99999;
    -ms-flex: 99999 1 auto;
    flex: 99999 1 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    overflow: auto;
  }
  :global(.ReactTable .rt-tbody .rt-tr-group) {
    border-bottom: solid 1px rgba(0, 0, 0, 0.05);
  }
  :global(.ReactTable .rt-tbody .rt-tr-group:last-child) {
    border-bottom: 0;
  }
  :global(.ReactTable .rt-tbody .rt-td) {
    border-right: 1px solid rgba(0, 0, 0, 0.02);
  }
  :global(.ReactTable .rt-tbody .rt-td:last-child) {
    border-right: 0;
  }
  :global(.ReactTable .rt-tbody .rt-expandable) {
    cursor: pointer;
  }
  :global(.ReactTable .rt-tr-group) {
    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
  }
  :global(.ReactTable .rt-tr) {
    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
  }
  :global(.ReactTable .rt-th),
  :global(.ReactTable .rt-td) {
    -webkit-box-flex: 1;
    -ms-flex: 1 0 0px;
    flex: 1 0 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 7px 5px;
    overflow: hidden;
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
    -webkit-transition-property: width, min-width, padding, opacity;
    transition-property: width, min-width, padding, opacity;
  }
  :global(.ReactTable .rt-th.-hidden),
  :global(.ReactTable .rt-td.-hidden) {
    width: 0 !important;
    min-width: 0 !important;
    padding: 0 !important;
    border: 0 !important;
    opacity: 0 !important;
  }
  :global(.ReactTable .rt-expander) {
    display: inline-block;
    position: relative;
    margin: 0;
    color: transparent;
    margin: 0 10px;
  }
  :global(.ReactTable .rt-expander:after) {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%) rotate(-90deg);
    transform: translate(-50%, -50%) rotate(-90deg);
    border-left: 5.04px solid transparent;
    border-right: 5.04px solid transparent;
    border-top: 7px solid rgba(0, 0, 0, 0.8);
    -webkit-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: pointer;
  }
  :global(.ReactTable .rt-expander.-open:after) {
    -webkit-transform: translate(-50%, -50%) rotate(0);
    transform: translate(-50%, -50%) rotate(0);
  }
  :global(.ReactTable .rt-resizer) {
    display: inline-block;
    position: absolute;
    width: 36px;
    top: 0;
    bottom: 0;
    right: -18px;
    cursor: col-resize;
    z-index: 10;
  }
  :global(.ReactTable .rt-tfoot) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);
  }
  :global(.ReactTable .rt-tfoot .rt-td) {
    border-right: 1px solid rgba(0, 0, 0, 0.05);
  }
  :global(.ReactTable .rt-tfoot .rt-td:last-child) {
    border-right: 0;
  }
  :global(.ReactTable.-striped .rt-tr.-odd) {
    background: rgba(0, 0, 0, 0.03);
  }
  :global(.ReactTable.-highlight .rt-tbody .rt-tr:not(.-padRow):hover) {
    background: rgba(0, 0, 0, 0.05);
  }
  :global(.ReactTable .-pagination) {
    z-index: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 3px;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
    border-top: 2px solid rgba(0, 0, 0, 0.1);
  }
  :global(.ReactTable .-pagination .-btn) {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: block;
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 3px;
    padding: 6px;
    font-size: 1em;
    color: rgba(0, 0, 0, 0.6);
    background: rgba(0, 0, 0, 0.1);
    -webkit-transition: all 0.1s ease;
    transition: all 0.1s ease;
    cursor: pointer;
    outline: none;
  }
  :global(.ReactTable .-pagination .-btn[disabled]) {
    opacity: 0.5;
    cursor: default;
  }
  :global(.ReactTable .-pagination .-btn:not([disabled]):hover) {
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
  }
  :global(.ReactTable .-pagination .-previous),
  :global(.ReactTable .-pagination .-next) {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: center;
  }
  :global(.ReactTable .-pagination .-center) {
    -webkit-box-flex: 1.5;
    -ms-flex: 1.5;
    flex: 1.5;
    text-align: center;
    margin-bottom: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: distribute;
    justify-content: space-around;
  }
  :global(.ReactTable .-pagination .-pageInfo) {
    display: inline-block;
    margin: 3px 10px;
    white-space: nowrap;
  }
  :global(.ReactTable .-pagination .-pageJump) {
    display: inline-block;
  }
  :global(.ReactTable .-pagination .-pageJump input) {
    width: 70px;
    text-align: center;
  }
  :global(.ReactTable .-pagination .-pageSizeOptions) {
    margin: 3px 10px;
  }
  :global(.ReactTable .rt-noData) {
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.8);
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    z-index: 1;
    pointer-events: none;
    padding: 20px;
    color: rgba(0, 0, 0, 0.5);
  }
  :global(.ReactTable .-loading) {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.8);
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    z-index: -1;
    opacity: 0;
    pointer-events: none;
  }
  :global(.ReactTable .-loading > div) {
    position: absolute;
    display: block;
    text-align: center;
    width: 100%;
    top: 50%;
    left: 0;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.6);
    -webkit-transform: translateY(-52%);
    transform: translateY(-52%);
    -webkit-transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  :global(.ReactTable .-loading.-active) {
    opacity: 1;
    z-index: 2;
    pointer-events: all;
  }
  :global(.ReactTable .-loading.-active > div) {
    -webkit-transform: translateY(50%);
    transform: translateY(50%);
  }
  :global(.ReactTable input),
  :global(.ReactTable select) {
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: #fff;
    padding: 5px 7px;
    font-size: inherit;
    border-radius: 3px;
    font-weight: normal;
    outline: none;
  }
  :global(.ReactTable .rt-resizing .rt-th),
  :global(.ReactTable .rt-resizing .rt-td) {
    -webkit-transition: none !important;
    transition: none !important;
    cursor: col-resize;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  :global(ReactTable .-pagination .-btn) {
    margin: 0;
  }
  /* Tufte CSS styles */
  :global(html) {
    font-size: 15px;
  }
  :global(body) {
    background-color: #fffff8;
  }
  :global(body) {
    font-family: et-book, Palatino, "Palatino Linotype", "Palatino LT STD",
      "Book Antiqua", Georgia, serif;
    background-color: #fffff8;
    color: #111;
    counter-reset: sidenote-counter;
  }
  :global(.idyll-root) {
    position: relative;
    padding: 5rem 0rem;
    margin-left: 0;
    width: auto;
    margin: auto;
  }
  :global(h1),
  :global(.hed) {
    font-weight: 400;
    margin-top: 4rem;
    margin-bottom: 1.5rem;
    font-size: 3.2rem;
    line-height: 1;
  }
  :global(h2) {
    font-style: italic;
    font-weight: 400;
    margin-top: 2.1rem;
    margin-bottom: 0;
    font-size: 2.2rem;
    line-height: 1;
  }
  :global(h3) {
    font-style: italic;
    font-weight: 400;
    font-size: 1.7rem;
    margin-top: 2rem;
    margin-bottom: 0;
    line-height: 1;
  }
  :global(hr) {
    display: block;
    height: 1px;
    width: 55%;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
    padding: 0;
  }
  :global(p.subtitle),
  :global(.dek) {
    font-style: italic;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1.8rem;
    display: block;
    line-height: 1;
  }
  :global(.numeral) {
    font-family: et-book-roman-old-style;
  }
  :global(.danger) {
    color: red;
  }
  :global(section) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  :global(p),
  :global(ol),
  :global(ul) {
    font-size: 1.4rem;
  }
  :global(p) {
    line-height: 2rem;
    margin-top: 1.4rem;
    margin-bottom: 1.4rem;
    padding-right: 0;
    vertical-align: baseline;
  }
  /* Chapter Epigraphs */
  :global(div.epigraph) {
    margin: 5em 0;
  }
  :global(div.epigraph > blockquote) {
    margin-top: 3em;
    margin-bottom: 3em;
  }
  :global(div.epigraph > blockquote),
  :global(div.epigraph > blockquote > p) {
    font-style: italic;
  }
  :global(div.epigraph > blockquote > footer) {
    font-style: normal;
  }
  :global(div.epigraph > blockquote > footer > cite) {
    font-style: italic;
  }
  /* end chapter epigraphs styles */
  :global(blockquote) {
    font-size: 1.4rem;
  }
  :global(blockquote p) {
    width: 55%;
    margin-right: 40px;
  }
  :global(blockquote footer) {
    width: 55%;
    font-size: 1.1rem;
    text-align: right;
  }
  :global(section > ol),
  :global(section > ul) {
    width: 45%;
    -webkit-padding-start: 5%;
    -webkit-padding-end: 5%;
  }
  :global(li) {
    padding: 0.5rem 0;
  }
  :global(figure) {
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    max-width: 55%;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
    margin: 0 0 3em 0;
  }
  :global(figcaption) {
    float: right;
    clear: right;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.1rem;
    line-height: 1.6;
    vertical-align: baseline;
    position: relative;
    max-width: 40%;
  }
  :global(figure.fullwidth figcaption) {
    margin-right: 24%;
  }
  /* Links: replicate underline that clears descenders */
  :global(a:link),
  :global(a:visited) {
    color: inherit;
  }
  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    :global(a:link) {
      background-position-y: 87%, 87%, 87%;
    }
  }
  :global(a:link::-moz-selection) {
    text-shadow: 0.03em 0 #b4d5fe, -0.03em 0 #b4d5fe, 0 0.03em #b4d5fe,
      0 -0.03em #b4d5fe, 0.06em 0 #b4d5fe, -0.06em 0 #b4d5fe, 0.09em 0 #b4d5fe,
      -0.09em 0 #b4d5fe, 0.12em 0 #b4d5fe, -0.12em 0 #b4d5fe, 0.15em 0 #b4d5fe,
      -0.15em 0 #b4d5fe;
    background: #b4d5fe;
  }
  /* Sidenotes, margin notes, figures, captions */
  :global(img) {
    max-width: 100%;
  }
  :global(.aside),
  :global(.sidenote),
  :global(.marginnote) {
    float: right;
    clear: right;
    margin-right: -60%;
    width: 50%;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.1rem;
    line-height: 1.3;
    vertical-align: baseline;
    position: relative;
  }
  :global(.sidenote-number) {
    counter-increment: sidenote-counter;
  }
  :global(.sidenote-number:after),
  :global(.sidenote:before) {
    content: counter(sidenote-counter) " ";
    font-family: et-book-roman-old-style;
    position: relative;
    vertical-align: baseline;
  }
  :global(.sidenote-number:after) {
    content: counter(sidenote-counter);
    font-size: 1rem;
    top: -0.5rem;
    left: 0.1rem;
  }
  :global(.sidenote:before) {
    content: counter(sidenote-counter) " ";
    top: -0.5rem;
  }
  :global(blockquote .sidenote),
  :global(blockquote .marginnote),
  :global(blockquote .aside) {
    margin-right: -82%;
    min-width: 59%;
    text-align: left;
  }
  :global(.aside-container) {
    position: static;
    width: 55%;
  }
  :global(div.fullwidth),
  :global(table.fullwidth) {
    width: 100%;
  }
  :global(div.table-wrapper) {
    overflow-x: auto;
    font-family: "Trebuchet MS", "Gill Sans", "Gill Sans MT", sans-serif;
  }
  :global(.sans) {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, sans-serif;
    letter-spacing: 0.03em;
  }
  :global(code) {
    font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
    font-size: 1rem;
    line-height: 1.42;
  }
  :global(.sans > code) {
    font-size: 1.2rem;
  }
  :global(h1 > code),
  :global(h2 > code),
  :global(h3 > code) {
    font-size: 0.8em;
  }
  :global(.marginnote > code),
  :global(.sidenote > code) {
    font-size: 1rem;
  }
  :global(pre.code) {
    font-size: 0.9rem;
    width: 52.5%;
    margin-left: 2.5%;
    overflow-x: auto;
  }
  :global(pre.code.fullwidth) {
    width: 90%;
  }
  :global(.fullwidth) {
    max-width: 90%;
    clear: both;
  }
  :global(span.newthought) {
    font-variant: small-caps;
    font-size: 1.2em;
  }
  :global(input.margin-toggle) {
    display: none;
  }
  :global(label.sidenote-number) {
    display: inline;
  }
  :global(label.margin-toggle:not(.sidenote-number)) {
    display: none;
  }
  @media (max-width: 760px) {
    :global(p),
    :global(footer) {
      width: 100%;
    }
    :global(pre.code) {
      width: 97%;
    }
    :global(ul) {
      width: 85%;
    }
    :global(figure) {
      max-width: 90%;
    }
    :global(figcaption),
    :global(figure.fullwidth figcaption) {
      margin-right: 0%;
      max-width: none;
    }
    :global(blockquote) {
      margin-left: 1.5em;
      margin-right: 0em;
    }
    :global(blockquote p),
    :global(blockquote footer) {
      width: 100%;
    }
    :global(label.margin-toggle:not(.sidenote-number)) {
      display: inline;
    }
    :global(.sidenote),
    :global(.marginnote) {
      display: none;
    }
    :global(.margin-toggle:checked + .sidenote),
    :global(.margin-toggle:checked + .marginnote) {
      display: block;
      float: left;
      left: 1rem;
      clear: both;
      width: 95%;
      margin: 1rem 2.5%;
      vertical-align: baseline;
      position: relative;
    }
    :global(label) {
      cursor: pointer;
    }
    :global(div.table-wrapper),
    :global(table) {
      width: 85%;
    }
    :global(img) {
      width: 100%;
    }
  }
  :global(.idyll-dynamic) {
    text-decoration: underline;
    text-decoration-style: dotted;
  }
  :global(.idyll-action) {
    text-decoration: underline;
  }
  :global(.idyll-document-error) {
    color: red;
    font-family: monospace;
  }
  :global(.idyll-step-graphic) {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    height: 100%;
    overflow: hidden;
    margin: 0 auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
  }
  :global(.idyll-scroll-graphic) {
    text-align: center;
    width: 100%;
  }
  :global(.idyll-step-graphic img) {
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%;
  }
  :global(.idyll-step-content) {
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    color: white;
    padding: 10px;
    background: rgba(0, 0, 0, 0.8);
  }
  :global(.idyll-stepper-control) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
  }
  :global(.idyll-stepper-control-button) {
    background: rgba(0, 0, 0, 0.7);
    color: white;
    font-weight: bold;
    padding: 15px 10px;
    cursor: pointer;
  }
  :global(.idyll-stepper-control-button-previous) {
    position: absolute;
    left: 10px;
  }
  :global(.idyll-stepper-control-button-next) {
    position: absolute;
    right: 10px;
  }
  :global(.idyll-stepper) {
    margin: 60px 0;
  }
  :global(.idyll-scroll) {
    margin-top: 25vh;
  }
  :global(.idyll-scroll-text) {
    padding: 50vh 0;
  }
  :global(.idyll-scroll-text .idyll-step) {
    margin: 75vh 0 75vh 0;
    padding: 50px;
    background: #fff;
    border: solid 1px #111;
  }
  :global(.idyll-scroll-text .idyll-step h2) {
    margin-top: 0;
  }
  :global(pre) {
    background: #f3f3f3;
    padding: 15px;
    overflow-x: auto;
  }
</style>

<slot />
