<template>
  <div class="row justify-content-md-center">
    <div class="col-md-3">
      <nav class="toc">
        <ul>
          <li><a href="#intro">Abstract</a></li>
          <li><a href="#introduction">Introduction</a></li>
          <li>
            <a href="#dev">Factors</a>
            <ul>
              <li><a href="#dev-edit-html">Fine-tuning</a></li>
              <li><a href="#dev-element-classes">Dataset</a></li>
              <li><a href="#dev-slide-classes">Task Similarity</a></li>
              <li><a href="#dev-export-html">Embeddings Quality</a></li>
            </ul>
          </li>
          <li>
            <a href="#css">Conclusion</a>
            <ul>
              <li><a href="#css-fonts">Custom Fonts</a></li>
              <li><a href="#css-developer-mode">Developer Mode</a></li>
              <li><a href="#css-references">References</a></li>
            </ul>
          </li>
        </ul>
        <svg
          class="toc-marker"
          width="200"
          height="200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="#444"
            stroke-width="3"
            fill="transparent"
            stroke-dasharray="0, 0, 0, 1000"
            stroke-linecap="round"
            stroke-linejoin="round"
            transform="translate(-0.5, -0.5)"
          />
        </svg>
      </nav>
    </div>
    <div class="col-md-9">
      <article class="contents">
        <section id="intro">
          <h1>Unraveling Transferability of BERT</h1>
          <Plot />
          <h2>Abstract</h2>
          <div class="row"></div>
          <p>
            In this article, we investigate the factors affecting the
            transferability of a BERT model trained on general natural language
            understanding to downstream, more specific tasks. These factors
            include number of layers, number of fine-tuning epochs, dataset
            size, and label noise. We find that, in general, a shallower BERT
            model transfers better than a deeper model, and that a model trained
            with more data and for more epochs transfers better than a model
            trained with less data and for fewer epochs. We also find that label
            noise has a negative effect on transferability.
          </p>
        </section>

        <section id="introduction">
          <h2>Introduction</h2>
          <p>
            Since their introduction in 2017, Transformers (Vaswani et al.,
            2017) have taken NLP by storm, offering enhanced parallelization and
            better modeling of long-range dependencies. The best known
            Transformer-based model is BERT (Devlin et al., 2019); it obtained
            state-of-the-art results in numerous benchmarks and is still a
            must-have baseline.
          </p>
          <p>
            BERT is a deep learning model that has been shown to be effective
            for a range of natural language understanding tasks. However, it is
            not clear how well BERT transfers to more specific tasks. In this
            article, we investigate the factors that affect the transferability
            of BERT. These factors include the number of layers, the number of
            fine-tuning epochs, the dataset size, and the label noise.
          </p>
          <p>
            We first consider the linguistic aspects of it, such as the number
            of layers, the number of fine-tuning epochs, and the dataset size.
            We find that, in general, a shallower BERT model transfers better
            than a deeper model, and that a model trained with more data and for
            more epochs transfers better than a model trained with less data and
            for fewer epochs. We also consider the effect of label noise on
            transferability. We find that label noise has a negative effect on
            transferability.
          </p>
          <p>
            In conclusion, we find that the transferability of BERT is affected
            by a number of factors, including the number of layers, the number
            of fine-tuning epochs, the dataset size, and the label noise.
          </p>
        </section>
        <section>
          <div id="dev">
            <h2>Factors</h2>
            <p>
              In this section we discuss the main factors that affect the
              transferability of BERT. These factors are the number of layers,
              the number of fine-tuning epochs, the dataset size, and the label
              noise.
            </p>
          </div>

          <div id="dev-edit-html">
            <h3>Fine-tuning</h3>
            <p>
              When a model is fine-tuned on a specific task, its transferability
              to other tasks is usually enhanced. This is because the model has
              been specifically optimized for the task at hand, and so is better
              able to generalize to other tasks. There is some evidence that
              fine-tuning can also improve a model's ability to transfer to
              other domains. For example, a model that is fine-tuned on a
              medical domain may be able to better transfer to other medical
              domains. However, it is not clear how much of an improvement
              fine-tuning provides in this case.
            </p>
            <ScatterFacet />
            <p>
              The results of the visualization above hold two main observations:
            </p>
            <ul>
              <li>
                The data points of different classes are highly mixed, and no
                pattern or discrimination boundaries are yet developed at the
                beginning of the training loop. As the training progresses, an
                apparent clustering of the different classes starts to establish
                itself in some layers.
              </li>
              <li>
                The pattern and clustering of the different classes are
                primarily evident in higher layers of the model.
              </li>
            </ul>
            <p>
              The previous observations show that the pre-trained Bert model has
              a low or non-existing understanding of unseen data, but after a
              proper fine-tuning procedure, it can generalize and adapt to new
              domains effectively. Furthermore, the observation shows which
              layers learn and hold the most discriminating features.
            </p>
          </div>

          <div id="dev-element-classes">
            <h3>Dataset</h3>
            <p>
              As a paying Slides customer you have access to the
              <a href="#css">CSS editor</a> which allows you to add custom
              styles to your deck. By turning on the developer mode a new "class
              name" field will appear for any block that you focus. This allows
              you to easily target a specific element with your CSS.
            </p>
            <p>
              Here's an example that defines an "upside-down" class using custom
              CSS and applies it to a text block.
            </p>
          </div>

          <div id="dev-slide-classes">
            <h3>Task Similarity</h3>
            <p>
              Just like you can add custom classes to individual elements it's
              also possible to add custom classes at the slide level. This can
              used to apply broader changes to the whole slide like inverting
              text and icon colors or changing the slide transition.
            </p>
            <ConnectedGraph />
            <p>
              Under the hood the slide background element is separate from the
              slide itself. Here are two examples showing how you'd target the
              slide contents or slide background using a custom class called
              "night-sky":
            </p>
          </div>

          <div id="dev-export-html">
            <h3>Embeddings Quality</h3>
            <p>
              You can access the complete HTML for all slides in your deck
              inside of the export panel, under "Export to reveal.js". This
              provides a way of exporting your deck markup and the core Slides
              styles to reveal.js. There are a few limitations with exporting
              this way but it should provide a good starting point.
            </p>
          </div>
        </section>

        <section>
          <div id="css">
            <h2>Conclusion</h2>
            <p>
              Fine-tuning can improve a model's transferability, although the
              extent of the improvement may vary depending on the task and
              domain. Other factors like the dataset and the model's size can
              also affect transferability.
            </p>
            <p>
              The editor preprocesses styles using
              <a href="http://lesscss.org/">LESS</a>, though you're free to
              write plain CSS as well. We apply the styles in real-time as you
              type so there's no need to leave the editor or even press a
              refresh button to see what you're getting. Note that when your
              styles are saved they will be automatically wrapped in a ".reveal
              {}" selector to avoid conflicts with other page styles.
            </p>
          </div>
          <div id="css-fonts">
            <h3>Custom Fonts</h3>
            <p>
              You can load custom fonts from Typekit and Google fonts and apply
              them using custom CSS.
              <a
                href="http://help.slides.com/knowledgebase/articles/1077976-custom-fonts-pro"
                >Find out more</a
              >.
            </p>
          </div>
          <div id="css-developer-mode">
            <h3>Directions and Further Research</h3>
            <p>
              There is still much research that needs to be done in order to
              fully understand how fine-tuning affects BERT's transferability.
              In particular, it would be interesting to compare the
              transferability of models that are fine-tuned on different tasks
              and domains. Additionally, it would be helpful to investigate how
              different amounts of fine-tuning affect transferability.
            </p>
          </div>

          <div id="css-references">
            <h3>References</h3>
            <p>
              1. https://arxiv.org/pdf/1906.01083.pdf 2.
              https://towardsdatascience.com/bert-explained-state-of-the-art-language-model-for-nlp-f8b21a9b6270
              3. https://huggingface.co/transformers/pretrained_models.html#bert
              4.
              https://medium.com/@jonathan_hui/bert-explained-state-of-the-art-language-model-for-nlp-f8b21a9b6270
            </p>
          </div>
        </section>
      </article>
    </div>
  </div>
</template>

<script>
import "@/assets/style.css";
import ScatterFacet from "./visualizations/ScatterFacet.vue";
import ConnectedGraph from "./visualizations/ConnectedGraph.vue";
import Plot from "./visualizations/Plot.vue";

export default {
  name: "ArticlePage",
  components: {
    ConnectedGraph,
    ScatterFacet,
    Plot,
  },
  mounted() {
    var toc = document.querySelector(".toc");
    var tocPath = document.querySelector(".toc-marker path");
    var tocItems;

    // Factor of screen size that the element must cross
    // before it's considered visible
    var TOP_MARGIN = 0.1,
      BOTTOM_MARGIN = 0.2;

    var pathLength;

    var lastPathStart, lastPathEnd;

    window.addEventListener("resize", drawPath, false);
    window.addEventListener("scroll", sync, false);

    drawPath();

    function drawPath() {
      tocItems = [].slice.call(toc.querySelectorAll("li"));

      // Cache element references and measurements
      tocItems = tocItems.map(function (item) {
        var anchor = item.querySelector("a");
        var target = document.getElementById(
          anchor.getAttribute("href").slice(1)
        );

        return {
          listItem: item,
          anchor: anchor,
          target: target,
        };
      });

      // Remove missing targets
      tocItems = tocItems.filter(function (item) {
        return !!item.target;
      });

      var path = [];
      var pathIndent;

      tocItems.forEach(function (item, i) {
        var x = item.anchor.offsetLeft - 5,
          y = item.anchor.offsetTop,
          height = item.anchor.offsetHeight;

        if (i === 0) {
          path.push("M", x, y, "L", x, y + height);
          item.pathStart = 0;
        } else {
          // Draw an additional line when there's a change in
          // indent levels
          if (pathIndent !== x) path.push("L", pathIndent, y);

          path.push("L", x, y);

          // Set the current path so that we can measure it
          tocPath.setAttribute("d", path.join(" "));
          item.pathStart = tocPath.getTotalLength() || 0;

          path.push("L", x, y + height);
        }

        pathIndent = x;

        tocPath.setAttribute("d", path.join(" "));
        item.pathEnd = tocPath.getTotalLength();
      });

      pathLength = tocPath.getTotalLength();

      sync();
    }

    function sync() {
      var windowHeight = window.innerHeight;

      var pathStart = pathLength,
        pathEnd = 0;

      var visibleItems = 0;

      tocItems.forEach(function (item) {
        var targetBounds = item.target.getBoundingClientRect();

        if (
          targetBounds.bottom > windowHeight * TOP_MARGIN &&
          targetBounds.top < windowHeight * (1 - BOTTOM_MARGIN)
        ) {
          pathStart = Math.min(item.pathStart, pathStart);
          pathEnd = Math.max(item.pathEnd, pathEnd);

          visibleItems += 1;

          item.listItem.classList.add("visible");
        } else {
          item.listItem.classList.remove("visible");
        }
      });

      // Specify the visible path or hide the path altogether
      // if there are no visible items
      if (visibleItems > 0 && pathStart < pathEnd) {
        if (pathStart !== lastPathStart || pathEnd !== lastPathEnd) {
          tocPath.setAttribute("stroke-dashoffset", "1");
          tocPath.setAttribute(
            "stroke-dasharray",
            "1, " + pathStart + ", " + (pathEnd - pathStart) + ", " + pathLength
          );
          tocPath.setAttribute("opacity", 1);
        }
      } else {
        tocPath.setAttribute("opacity", 0);
      }

      lastPathStart = pathStart;
      lastPathEnd = pathEnd;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
</style>
