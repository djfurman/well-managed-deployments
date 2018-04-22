<template>

</template>

<script>
import swal from 'sweetalert2';
export default {
  created() {
      window.eventHub.$on('pending', message => {
          swal({
              title: 'Please wait',
              text: message.message,
              type: 'info',
              onOpen: () => {
                  swal.showLoading()
              },
          });
      });

      window.eventHub.$on('complete', () => {
          swal.close();
      });
  }
}
</script>
