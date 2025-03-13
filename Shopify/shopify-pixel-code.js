// Step 1. Initialize the JavaScript pixel SDK (make sure to exclude HTML)
(function (w, d, t, r, u) {
  var f, n, i;
  (w[u] = w[u] || []),
    (f = function () {
      var o = { ti: "137035971", enableAutoSpaTracking: true };
      (o.q = w[u]), (w[u] = new UET(o)), w[u].push("pageLoad");
    }),
    (n = d.createElement(t)),
    (n.src = r),
    (n.async = 1),
    (n.onload = n.onreadystatechange =
      function () {
        var s = this.readyState;
        (s && s !== "loaded" && s !== "complete") ||
          (f(), (n.onload = n.onreadystatechange = null));
      }),
    (i = d.getElementsByTagName(t)[0]),
    i.parentNode.insertBefore(n, i);
})(window, document, "script", "//bat.bing.com/bat.js", "uetq");

// Step 2. Subscribe to customer events with analytics.subscribe(), and add tracking
//  analytics.subscribe("all_standard_events", event => {
//    console.log("Event data ", event?.data);
//  });
analytics.subscribe("checkout_completed", (event) => {
  window.uetq = window.uetq || [];
  window.uetq.push("event", "purchase", {
    revenue_value: event.data?.checkout?.totalPrice?.amount,
    currency: event.data?.checkout?.currencyCode,
  });
});
