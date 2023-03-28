<template>
    <button class="mainButton" @click="$emit('click')">
        <slot></slot>
    </button>
</template>

<style scoped>
.mainButton {
    border-radius: 2px;
    max-width: min-content;
    white-space: nowrap;
    text-transform: uppercase;
    padding: 10px 15px;
    font-weight: 700;
    font-size: 14px;
    border: none;
    background-color: #212529;
    color: #fff;
    cursor: pointer;
    outline: none;
    transition: all .3s ease;
}
.mainButton:hover {
    opacity: .7;
}
</style>