<template>
    <div
     :id="id"
     class="board"
     @dragover.prevent
     @drop.prevent="drop"
    >
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    methods: {
        drop(event) {
            const cardId = event.dataTransfer.getData('cardId')
            const card = document.getElementById(cardId)
            card.style.display = 'block'
            event.target.appendChild(card)
        }
        
    }
}
</script>

