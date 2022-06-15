<template>
  <div id="viz2"></div>
</template>

<script>
import embed from "vega-embed";

export default {
  name: "Vega",
  async mounted() {
    var def = {
      $schema: "https://vega.github.io/schema/vega/v5.json",
      description: "A small multiples view of tsne xs by layer and y.",
      width: 200,
      padding: 5,

      data: [
        {
          name: "tsne",
          url: "tsne.json",
          transform: [
            {
              type: "filter",
              expr: "datum.epoch == epoch",
            },
          ],
        },
      ],

      signals: [
        { name: "cellHeight", value: 200 },
        { name: "offset", value: 12 },
        { name: "height", update: "bandspace(domain('yscale').length, 1, 0.5) * offset" },
        {
          name: "epoch",
          value: 0,
          bind: { input: "range", min: 0, max: 3, step: 1 },
        },
      ],

      layout: { padding: 20, bounds: "full", align: "all", columns: 4 },

      marks: [
        {
          name: "layer",
          type: "group",

          from: {
            facet: {
              name: "layers",
              data: "tsne",
              groupby: ["layer"],
            },
          },

          encode: {
            update: {
              // y: {
              //   scale: "gscale",
              //   field: "layer",
              //   offset: { signal: "offset" },
              // },
              height: { signal: "cellHeight" },
              width: { signal: "width" },
              stroke: { value: "#ccc" },
            },
          },

          marks: [
            {
              type: "symbol",
              from: { data: "layers" },
              encode: {
                update: {
                  x: { scale: "xscale", field: "x" },
                  y: { scale: "yscale", field: "y" },
                  stroke: { scale: "cscale", field: "label" },
                  // strokeWidth: { value: 2 },
                  // size: { value: 50 },
                },
              },
            },
          ],

          scales: [
            {
              name: "yscale",
              type: "point",
              range: [0, { signal: "cellHeight" }],
              padding: 1,
              round: true,
              domain: {
                data: "tsne",
                field: "y",
                sort: {
                  field: "x",
                  op: "median",
                  order: "descending",
                },
              },
            },
          ],
        },

        {
          type: "text",
          from: { data: "layer" },
          encode: {
            enter: {
              x: { field: "width", mult: 0.5 },
              y: { field: "y" },
              fontSize: { value: 11 },
              fontWeight: { value: "bold" },
              text: { field: "datum.layer" },
              align: { value: "center" },
              baseline: { value: "bottom" },
              fill: { value: "#000" },
            },
          },
        },
      ],
      
      spec: {
        selection: {
          slider: {
            type: "single",
            fields: ["epoch"],
            bind: {
              epoch: { input: "range", min: 0, max: 4, step: 1 },
            },
          },
        },
      },

      scales: [
        {
          name: "gscale",
          type: "linear",
          range: "height",
          nice: true,
          round: true,
          domain: { data: "tsne", field: "y" },
        },
        {
          name: "xscale",
          type: "linear",
          range: "width",
          nice: true,
          round: true,
          domain: { data: "tsne", field: "x" },
        },
        {
          name: "cscale",
          type: "ordinal",
          range: "category",
          domain: { data: "tsne", field: "label" },
        },
      ],

      legends: [
        {
          stroke: "cscale",
          title: "label",
          padding: 4,
          encode: {
            symbols: {
              enter: {
                strokeWidth: { value: 2 },
                size: { value: 50 },
              },
            },
          },
        },
      ],


    };
    await embed("#viz2", def, { actions: false });
  },
};
</script>

<style>
</style>
