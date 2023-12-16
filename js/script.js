// $(document).ready(() => loadPage("content", " "));

// let lastPage = "";

// function loadPage(id, subpage) {
//     $('#' + id).load(subpage, (response, status) => {
//         if (status === "error") {
//             console.error("loadPage error");
//         }
//     });
// }

// function changePage(subpage, href) {
//     try {
//         if (lastPage !== subpage) {
//             lastPage = subpage;
//             loadPage("content", subpage);
//         }
//         else if (href !== undefined) {
//             location.href = href;
//         }
//     }
//     catch (e) {
//         console.log(e);
//         alert("changePage error");
//     }
// }
