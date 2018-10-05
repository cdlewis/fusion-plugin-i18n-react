/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import PropTypes from 'prop-types';

import i18n from 'fusion-plugin-i18n';

type TranslateRawPropsType = {
  id: string,
  data?: Object,
};

type TranslateRawContextType = {
  i18n?: typeof i18n.provides,
};

function TranslateRaw(
  props: TranslateRawPropsType,
  context: TranslateRawContextType
) {
  return (
    (context.i18n && context.i18n.translate(props.id, props.data)) || props.id
  );
}

TranslateRaw.contextTypes = {
  i18n: PropTypes.object,
};

export {TranslateRaw};
