document.addEventListener('DOMContentLoaded', function() {
    // Referencias a elementos del DOM
    const acceptTermsModal = document.getElementById('acceptTermsModal');
    const acceptTermsBtn = document.getElementById('acceptTermsBtn');
    const cancelBtn = document.querySelector('.btn-secondary');
    const closeBtn = document.querySelector('.close');
  
    // Habilitar/deshabilitar botón de aceptar según el checkbox
    if (acceptTermsModal && acceptTermsBtn) {
      acceptTermsModal.addEventListener('change', function() {
        acceptTermsBtn.disabled = !this.checked;
        
        // Agregar efecto visual al checkbox
        if (this.checked) {
          this.parentElement.classList.add('terms-accepted');
        } else {
          this.parentElement.classList.remove('terms-accepted');
        }
      });
    }
  
    // Manejar la aceptación de términos y redirección
    if (acceptTermsBtn) {
      acceptTermsBtn.addEventListener('click', function() {
        if (acceptTermsModal.checked) {
          // Mostrar animación de carga
          this.classList.add('loading');
          this.textContent = 'Redirigiendo...';
          this.disabled = true;
  
          // Guardar en localStorage que se aceptaron los términos
          localStorage.setItem('termsAccepted', 'true');
          localStorage.setItem('termsAcceptedDate', new Date().toISOString());
  
          // Verificar si venía del modal del formulario
          const modalFormData = localStorage.getItem('modalFormData');
          
          // Redireccionar después de una breve pausa para mostrar el feedback
          setTimeout(() => {
            if (modalFormData) {
              // Si venía del modal, regresar al index con el modal abierto
              window.location.href = 'index.html#open-modal';
            } else {
              // Si no venía del modal, solo regresar al index
              window.location.href = 'index.html';
            }
          }, 1000);
        }
      });
    }
  
    // Manejar botón de cancelar
    if (cancelBtn) {
      cancelBtn.addEventListener('click', function() {
        // Verificar si venía del modal
        const modalFormData = localStorage.getItem('modalFormData');
        
        if (modalFormData) {
          if (confirm('¿Está seguro que desea regresar sin aceptar los términos y condiciones?')) {
            window.location.href = 'index.html#open-modal';
          }
        } else {
          if (confirm('¿Está seguro que desea salir sin aceptar los términos y condiciones?')) {
            window.location.href = 'index.html';
          }
        }
      });
    }
  
    // Manejar botón de cerrar (X)
    if (closeBtn) {
      closeBtn.addEventListener('click', function() {
        const modalFormData = localStorage.getItem('modalFormData');
        
        if (modalFormData) {
          if (confirm('¿Está seguro que desea regresar sin aceptar los términos y condiciones?')) {
            window.location.href = 'index.html#open-modal';
          }
        } else {
          if (confirm('¿Está seguro que desea salir sin aceptar los términos y condiciones?')) {
            window.location.href = 'index.html';
          }
        }
      });
    }
  
    // Función para mostrar confirmación al salir de la página
    window.addEventListener('beforeunload', function (e) {
      if (!localStorage.getItem('termsAccepted')) {
        e.preventDefault();
        e.returnValue = '';
        return '';
      }
    });
  
    // Efecto de entrada suave para el modal
    setTimeout(() => {
      document.querySelector('.terms-conditions-modal').style.opacity = '1';
    }, 100);
  
    // Manejar tecla ESC
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        const modalFormData = localStorage.getItem('modalFormData');
        
        if (modalFormData) {
          if (confirm('¿Está seguro que desea regresar sin aceptar los términos y condiciones?')) {
            window.location.href = 'index.html#open-modal';
          }
        } else {
          if (confirm('¿Está seguro que desea salir sin aceptar los términos y condiciones?')) {
            window.location.href = 'index.html';
          }
        }
      }
    });
  
    // Scroll suave al inicio cuando se carga la página
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Función adicional para verificar si los términos fueron aceptados (opcional)
  function checkTermsAcceptance() {
    const termsAccepted = localStorage.getItem('termsAccepted');
    const acceptanceDate = localStorage.getItem('termsAcceptedDate');
    
    if (termsAccepted && acceptanceDate) {
      console.log('Términos aceptados el:', new Date(acceptanceDate));
      return true;
    }
    return false;
  }
  
  // Función para limpiar el estado de aceptación (opcional, para testing)
  function clearTermsAcceptance() {
    localStorage.removeItem('termsAccepted');
    localStorage.removeItem('termsAcceptedDate');
  }