<template>
    <div
        :id="id"
        class="card"
        :draggable="draggable"
        @dragstart="dragStart"
        @dragover.stop>
        <slot />
    </div>
</template>


<script>
export default{
    props: ['id', 'draggable'],
    methods: {
        dragStart(event) {
            event.dataTransfer.setData('cardId', event.target.id)
            event.dataTransfer.effectAllowed = 'move'
            setTimeout(() => {
                event.target.style.display = 'none'
            }, 0)
        }
    }
}
</script>