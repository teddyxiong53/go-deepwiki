// 等待页面加载完成
window.addEventListener('load', function() {
  // 查找仓库标题容器
  const titleContainer = document.querySelector('.pagehead-actions');
  if (!titleContainer) return;

  // 创建按钮元素
  const button = document.createElement('button');
  button.className = 'btn ml-2';
  button.style.backgroundColor = '#2da44e';
  button.style.color = 'white';
  button.textContent = 'Go DeepWiki';

  // 添加点击事件
  button.addEventListener('click', function() {
    const currentUrl = window.location.href;
    const newUrl = currentUrl.replace('github.com', 'deepwiki.com');
    window.open(newUrl, '_blank');
  });

  // 插入到标题右侧
  titleContainer.prepend(button);
});