import { StyleSheet } from "react-native";

export const DrawerStyles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: '#FFC107',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  logo: {
    width: '100%',
    height: undefined,
    aspectRatio: 1.5,
  },
  drawerItems: {
    flex: 1,
    marginTop: 10,
  },
  drawerItem: {
    paddingVertical: 15,
  },
  activeDrawerItem: {
    backgroundColor: '#FFC107',
    borderRadius: 10,
  },
  drawerItemLabel: {
    fontSize: 16,
    color: '#333',
  },
  activeLabel: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  bottomButtonContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  bottomButton: {
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  bottomButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});