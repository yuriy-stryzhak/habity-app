<template>
    <v-container class="fill-height d-flex flex-column justify-center align-center text-center">
        <v-card class="pa-6 welcome-card" elevation="10" max-width="500">
        <v-card-title class="text-h4 font-weight-bold mb-4">
            Habity
        </v-card-title>
        <v-card-text class="text-subtitle-1 mb-6">
            {{ $t('app.slogan') }}
        </v-card-text>

        <v-btn color="primary" class="mb-3" block @click="navigateTo('/login')">
            {{ $t('auth.login') }}
        </v-btn>
        <v-btn color="accent" variant="outlined" block @click="navigateTo('/register')">
            {{ $t('auth.register') }}
        </v-btn>

        <v-divider class="my-6" />

        <v-select
            :items="languages"
            v-model="currentLocale"
            @update:modelValue="changeLocale"
            label="Language"
            density="compact"
            variant="outlined"
            class="mt-4"
        />
        </v-card>
    </v-container>
</template>

<script setup lang="ts">
const router = useRouter()
const { locale, locales, setLocale } = useI18n()

const languages = locales.value.map(l => ({
    title: l.name,
    value: l.code
}))

const currentLocale = ref(locale.value)

function changeLocale(value: string) {
    setLocale(value)
}
</script>

<style scoped lang="scss">
    .welcome-card {
        border-radius: 20px;
    }
</style>
