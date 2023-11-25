import { PUBLIC_BUCKET_NAME } from "$env/static/public";
import supabase from "$lib";
import type { Actions } from "./$types";

export const actions: Actions = {
    default: async ({ request }) => {
        let form = await request.formData();
        console.log(form);
        let name = form.get('name');
        let desc = form.get('desc');
        let image = form.get('inputImage');
        let randomString = crypto.randomUUID().slice(0, 8) + ".jpg";
        console.log('randomString', randomString);

        try {
            const { data, error } = await supabase
                .storage
                .from(PUBLIC_BUCKET_NAME)
                .upload(randomString, image)
            console.log('Uplaoded Data', data);
        }
        catch (e) {
            console.log(e);
        }
        finally {
            console.log('Form Submitted Successfully');

        }
    }
};