<template>
    <div
        :id="id"
        class="card"
        :draggable="draggable"
        @dragstart="dragStart" 
        @dragover.stop="dragStop"
    >
        <slot />
    </div>
</template>

<script>
export default {
    props: ['id', 'draggable'], 
    methods: {
        dragStart: e => {
            const target = e.target;
            var obj = 'card_id';
            e.dataTransfer.setData(obj, target.id);

    }
}
}
</script>
