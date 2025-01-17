        // 系统主题检测
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

        // 初始加载主题
        if (prefersDarkScheme.matches) {
            document.body.classList.add("dark-theme");
        } else {
            document.body.classList.add("light-theme");
        }
        
        // 切换主题功能
        function toggleTheme() {
            if (document.body.classList.contains("light-theme")) {
                document.body.classList.replace("light-theme", "dark-theme");
            } else {
                document.body.classList.replace("dark-theme", "light-theme");
            }
        }

        // 页面加载时添加类以触发淡入效果
        document.addEventListener('DOMContentLoaded', () => {
            document.body.classList.add('loaded');
            const fadeElements = document.querySelectorAll('.fade-in');
            setTimeout(() => {
                fadeElements.forEach((el) => {
                    el.classList.add('visible');
                });
            }, 200);
        });

        // 侧边栏切换
        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.toggle('open');
        }