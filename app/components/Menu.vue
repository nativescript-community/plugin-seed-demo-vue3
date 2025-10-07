<template>
    <Frame>
        <Page>
            <ActionBar>
                <Label text="Vue 3 Demo" />
            </ActionBar>

            <ScrollView>
                <StackLayout>
                    <StackLayout v-for="demo in demos" :key="demo.name">
                        <Button :text="demo.name" @tap="goToDemo(demo.component)" />
                    </StackLayout>
                </StackLayout>
            </ScrollView>
        </Page>
    </Frame>
</template>

<script setup lang="ts">
import { $navigateTo, onMounted, ref } from 'nativescript-vue';
import { demos } from '../../../demo-snippets/vue3/install';

declare const demoRedirect: string;

onMounted(() => {
    if (demoRedirect) {
        const Demo = demos.find(({ path }) => path === demoRedirect);
        if (Demo) {
            $navigateTo(Demo.component, {
                animated: false
            });
        }
    }
});
const goToDemo = async (component: any) => {
    try {
        $navigateTo(component, {
            animated: true,
            transition: {
                name: 'slideLeft',
                duration: 200,
                curve: 'ease'
            }
        });
    } catch (err) {
        console.error(err, err.stack);
    }
};
</script>
