let taggingWrapper = document.getElementById('taggingWrapper');
let tagItem = document.querySelectorAll('.tag-item');

document.querySelectorAll('.tag-item').forEach(function (item) {
    item.onmousedown = function(event) {
        let shiftX = event.clientX - item.getBoundingClientRect().left;
        let shiftY = event.clientY - item.getBoundingClientRect().top;

        // setting position absolute for our items
        item.style.position = 'absolute';
        // the selected item is displayed in the foreground
        item.style.zIndex = 1000;
        document.body.append(item);

        moveAt(event.pageX, event.pageY);

        // moving item to coordinate (pageX, pageY)
        function moveAt(pageX, pageY) {
            item.style.left = pageX - shiftX + 'px';
            item.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        // moving item with event mousemove
        document.addEventListener('mousemove', onMouseMove);

        // release the ball, remove unnecessary handlers
        item.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            item.onmouseup = null;
        };

    };

    item.ondragstart = function() {
        return false;
    };
});

