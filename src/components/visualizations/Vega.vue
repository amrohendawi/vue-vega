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
      description: "The Trellis display",
      background: "white",
      // autosize: { type: "fit", contains: "padding" },
      padding: 5,
      data: [
        {
          name: "source_0",
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
        { name: "trellis_barley_child_width", value: 100 },
        { name: "trellis_barley_y_step", value: 100 },
        {
          name: "trellis_barley_child_height",
          update:
            "bandspace(domain('trellis_barley_y').length, 10, 0.1) * trellis_barley_y_step",
        },
        {
          name: "epoch",
          value: 0,
          bind: { input: "range", min: 0, max: 3, step: 1 },
        },
      ],
      layout: { padding: 10, bounds: "full", align: "all", columns: 4 },
      marks: [
        {
          name: "trellis_barley_cell",
          type: "group",
          title: {
            text: {
              signal:
                'isValid(parent["layer"]) ? "layer "+parent["layer"] : ""+parent["layer"]',
            },
            style: "guide-label",
            frame: "group",
            offset: 10,
          },
          style: "cell",
          from: {
            facet: {
              name: "trellis_barley_facet",
              data: "source_0",
              groupby: ["layer"],
            },
          },
          encode: {
            update: {
              width: { signal: "trellis_barley_child_width" },
              height: { signal: "trellis_barley_child_height" },
            },
          },
          marks: [
            {
              type: "symbol",
              style: ["point"],
              from: { data: "trellis_barley_facet" },
              encode: {
                update: {
                  stroke: { scale: "trellis_barley_color", field: "label" },
                  x: { scale: "trellis_barley_x", field: "x" },
                  y: { scale: "trellis_barley_y", field: "y" },
                },
              },
            },
          ],
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
          name: "trellis_barley_x",
          type: "linear",
          domain: { data: "source_0", field: "x" },
          range: [0, { signal: "trellis_barley_child_width" }],
          nice: true,
          zero: true,
        },
        {
          name: "trellis_barley_y",
          type: "linear",
          domain: { data: "source_0", field: "y" },
          range: [0, { signal: "trellis_barley_y_step" }],
          nice: true,
          zero: true,
        },
        {
          name: "trellis_barley_color",
          type: "ordinal",
          domain: { data: "source_0", field: "label", sort: true },
          range: "category",
        },
        {
          name: "color",
          type: "ordinal",
          domain: { data: "source_0", field: "label", sort: true },
          range: "category",
        },
      ],
      legends: [
        {
          symbolType: "circle",
          title: "label",
          fill: "color",
          encode: {
            symbols: {
              update: {
                opacity: { value: 0.8 },
              },
            },
          },
        },
      ],
      config: {},
    };
    await embed("#viz2", def, { actions: false });
  },
};
</script>

<style>
</style>
