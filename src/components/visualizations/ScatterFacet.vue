<template>
  <div>
    <div ref="chart"></div>
    <div id="chart"></div>
    <!-- Add a slider -->
    <input
      type="range"
      name="epochSlider"
      id="epochSlider"
      min="0"
      max="3"
      v-model="epoch"
      @change="epochChange"
    />
  </div>
  <div>{{ epoch }}</div>
</template>

<script>
import * as d3 from "d3";
import * as Plot from "@observablehq/plot";
// import * as Inputs from "@observablehq/inputs";

export default {
  name: "ScatterFacet",
  data() {
    return {
      chart: null,
      data: null,
      epoch: 0,
    };
  },
  methods: {
    customTransform(data, facets) {
      return {
        data,
        facets: facets.map((facet) => {
          return facet.filter((i) => {
            return /, MI /.test(data[i].division);
          });
        }),
      };
    },
  },
  mounted() {
    d3.json("tsne.json", d3.autoType).then((data) => {
      this.data = data;
      console.log(data);

      document.getElementById("chart").appendChild(
        Plot.plot({
          x: {
            nice: true,
          },
          y: this.data.x,
          fy: this.data.y,
          color: {
            type: "categorical",
          },
          facet: {
            data: this.data,
            x: "layerx",
            y: "layery",
          },
          marks: [
            Plot.frame(),
            Plot.dot(this.data, {
              x: "x",
              y: "y",
              stroke: "label",
            }),
          ],
          filter: (d) => d.epoch === this.epoch,
        })
      );
    });
  },
};
</script>

<style></style>
