// let loadedResolve, reportLoaded = new Promise((res, rej) => { loadedResolve = res; });
// let renderedResolve, reportRendered = new Promise((res, rej) => { renderedResolve = res; });

// models = window['powerbi-client'].models;

// function embedPowerBIReport() {
//     let accessToken = "<your-access-token>";
//     let embedUrl = "https://app.powerbi.com/view?r=eyJrIjoiNjIwZDM5YjgtMmUwZi00N2Y5LWIyY2YtNzU2OGUzYzZlMGFjIiwidCI6IjU5ZTc1MzRmLTYwNDUtNDlhMi1iZWZhLTdjYTQ3OTBhZmVkNyJ9";
//     let embedReportId = "<your-report-id>";
//     let tokenType = "1"; // Replace with '0' for Aad or '1' for Embed.

//     let permissions = models.Permissions.All;

//     let config = {
//         type: 'report',
//         tokenType: tokenType == '0' ? models.TokenType.Aad : models.TokenType.Embed,
//         accessToken: accessToken,
//         embedUrl: embedUrl,
//         id: embedReportId,
//         permissions: permissions,
//         settings: {
//             panes: {
//                 filters: {
//                     visible: true
//                 },
//                 pageNavigation: {
//                     visible: true
//                 }
//             },
//             bars: {
//                 statusBar: {
//                     visible: true
//                 }
//             }
//         }
//     };

//     let embedContainer = document.getElementById("embedContainer");
//     report = powerbi.embed(embedContainer, config);

//     report.on("loaded", function () {
//         loadedResolve();
//         report.updateSettings({
//             zoomLevel: 1.48 // Set your desired zoom level here
//         }).catch(function (error) {
//             console.error("Error updating zoom level:", error);
//         });
//     });

//     report.on("error", function (event) {
//         console.log(event.detail);
//     });

//     report.on("rendered", function () {
//         renderedResolve();
//     });
// }

// embedPowerBIReport();
