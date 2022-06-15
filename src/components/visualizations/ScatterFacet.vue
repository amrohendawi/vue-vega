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
  mounted() {
    d3.json("tsne.json", d3.autoType).then((data) => {
      // add a new column to the data called layerx. this column is equal to the layer % 4
      // data.forEach((d) => {
      //   d.layerx = d.layer % 4;
      // });
      // // Add layery to the data. This column is equal to the layer / 4
      // data.forEach((d) => {
      //   d.layery = Math.floor(d.layer / 4);
      // });
      // group data by epoch
      this.data = d3.group(data, (d) => d.epoch);
      console.log(this.data);
      document.getElementById("chart").appendChild(
        Plot.plot({
          x: {
            nice: true,
          },
          y: this.data.get(this.epoch).x,
          fy: this.data.get(this.epoch).y,
          color: {
            type: "categorical",
          },
          facet: {
            data: this.data.get(this.epoch),
            x: "layerx",
            y: "layery",
          },
          marks: [
            Plot.frame(),
            Plot.dot(this.data.get(this.epoch), {
              x: "x",
              y: "y",
              stroke: "label",
            }),
          ],
        })
      );
    });
  },
};
</script>

<style></style>
