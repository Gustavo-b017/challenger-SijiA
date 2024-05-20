import React from 'react';
import PropTypes from 'prop-types';

// O componente Modal recebe uma prop: modal, que é um objeto contendo state, praise e points
function Modal ({ modal: { state, praise, points } }) {
  // Ele retorna um div que tem uma classe condicional baseada no estado do modal
  return (
    <div className={'correct-modal' + (state === 'show' ? ' modal-enter' : '')}>
       <div className="praise">{praise}</div> {/* O texto de elogio é renderizado aqui */}
       <div className="points">{points}</div> {/* Os pontos são renderizados aqui */}
    </div>
  );
};

// PropTypes é usado para verificar se as props recebidas são do tipo correto
Modal.propTypes = {
  modal: PropTypes.shape({
    state: PropTypes.string.isRequired, // state deve ser uma string
    praise: PropTypes.string.isRequired, // praise deve ser uma string
    points: PropTypes.string.isRequired // points deve ser uma string
  })
};

export default Modal; // O componente Modal é exportado para ser usado em outros arquivos