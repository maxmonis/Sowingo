angular.module("root", []).controller("prodController", ($scope, $http) => {
  const url = "https://demo5514996.mockable.io/products";
  $http({
    url,
    method: "GET",
  }).then(
    (res) => {
      const { hits } = res.data;
      console.log(hits);
      $scope.products = hits;
    },
    (err) => console.error(err)
  );
  $scope.searchPlaceholder =
    "Search by product name, manufacturer, SKU, keyword...";
});
