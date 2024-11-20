window.onload = function () {
    var toggleButtonWrapper = document.getElementById("toggleButtonWrapper");
    var toggleButton = document.getElementById("toggleButton");
    var sidePopup = document.getElementById("sidePopup");
    const closeButton = document.getElementById('closeButton'); // 获取关闭按钮元素
    toggleButton.addEventListener("click", function () {
        if (sidePopup.style.left === "-250px") {
            sidePopup.style.left = "0";
            // 移动按钮到展开后的位置
            toggleButtonWrapper.style.left = "250px";
        } else {
            sidePopup.style.left = "-250px";
            // 移动按钮到收起后的位置
            toggleButtonWrapper.style.left = "0";
        }
    });
// 为关闭按钮添加点击事件监听器
    closeButton.addEventListener('click', function() {
        // 设置弹窗的显示状态为隐藏
        sidePopup.style.display = 'none';
    });
};//左弹窗