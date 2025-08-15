import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fdfbf7" />
      
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* Top Navigation */}
        <View style={styles.navbar}>
          <Text style={styles.logo}>ROOP</Text>
          <TouchableOpacity style={styles.profileBtn}>
            <View style={styles.profileIcon}>
              <Text style={styles.profileText}>A</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Hero Banner with Model */}
        <View style={styles.heroBanner}>
          <LinearGradient
            colors={['#f8f6f0', '#e8dcc6']}
            style={styles.heroGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <View style={styles.heroContent}>
              <View style={styles.heroTextContainer}>
                <Text style={styles.heroTitle}>Style Meets{'\n'}Sustainability</Text>
                <Text style={styles.heroSubtitle}>Discover your perfect look while caring for our planet</Text>
              </View>
              
              {/* Model silhouette placeholder */}
              <View style={styles.modelContainer}>
                <View style={styles.modelSilhouette}>
                  <View style={styles.modelHead} />
                  <View style={styles.modelBody} />
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* Main Feature Cards */}
        <View style={styles.featuresContainer}>
          <TouchableOpacity style={[styles.featureCard, styles.tryOnCard]}>
            <LinearGradient
              colors={['#c8e6c9', '#a5d6a7']}
              style={styles.cardGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <View style={styles.cardIcon}>
                <View style={styles.tryOnIcon} />
              </View>
              <Text style={styles.cardTitle}>Virtual{'\n'}Try-On</Text>
              <Text style={styles.cardSubtitle}>See how it looks on you</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.featureCard, styles.thriftCard]}>
            <LinearGradient
              colors={['#f3e5ab', '#e6d45c']}
              style={styles.cardGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <View style={styles.cardIcon}>
                <View style={styles.thriftIcon} />
              </View>
              <Text style={styles.cardTitle}>Thrift{'\n'}Store</Text>
              <Text style={styles.cardSubtitle}>Pre-loved fashion finds</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Secondary Features */}
        <View style={styles.secondaryFeatures}>
          <TouchableOpacity style={styles.secondaryCard}>
            <LinearGradient
              colors={['#ffffff', '#f5f5f5']}
              style={styles.secondaryGradient}
            >
              <View style={styles.secondaryIcon}>
                <View style={styles.colorIcon} />
              </View>
              <Text style={styles.secondaryTitle}>Color Analysis</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryCard}>
            <LinearGradient
              colors={['#ffffff', '#f5f5f5']}
              style={styles.secondaryGradient}
            >
              <View style={styles.secondaryIcon}>
                <View style={styles.sustainIcon} />
              </View>
              <Text style={styles.secondaryTitle}>Sustainability Score</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryCard}>
            <LinearGradient
              colors={['#ffffff', '#f5f5f5']}
              style={styles.secondaryGradient}
            >
              <View style={styles.secondaryIcon}>
                <View style={styles.trendIcon} />
              </View>
              <Text style={styles.secondaryTitle}>Trending Now</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Trending Section */}
        <View style={styles.trendingSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Trending Finds</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.trendingScroll}
          >
            {[1, 2, 3, 4].map((item) => (
              <TouchableOpacity key={item} style={styles.trendingCard}>
                <LinearGradient
                  colors={['#ffffff', '#f8f8f8']}
                  style={styles.trendingGradient}
                >
                  <View style={styles.trendingImage}>
                    <View style={styles.imagePlaceholder} />
                  </View>
                  <View style={styles.trendingInfo}>
                    <Text style={styles.trendingPrice}>$24</Text>
                    <Text style={styles.trendingName}>Vintage Tee</Text>
                    <Text style={styles.trendingBrand}>Thrift Store</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Bottom spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfbf7',
  },
  scrollContainer: {
    paddingBottom: 100,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20,
  },
  logo: {
    fontSize: 32,
    fontWeight: '800',
    color: '#2d3436',
    letterSpacing: -1,
  },
  profileBtn: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  profileIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#e8dcc6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2d3436',
  },
  heroBanner: {
    marginHorizontal: 24,
    marginBottom: 32,
    borderRadius: 24,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 8,
  },
  heroGradient: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    width: '100%',
  },
  heroTextContainer: {
    flex: 1,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2d3436',
    lineHeight: 32,
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 14,
    color: '#636e72',
    lineHeight: 20,
    marginTop: 8,
  },
  modelContainer: {
    marginLeft: 20,
  },
  modelSilhouette: {
    alignItems: 'center',
  },
  modelHead: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ddd4c4',
    marginBottom: 4,
  },
  modelBody: {
    width: 32,
    height: 80,
    borderRadius: 16,
    backgroundColor: '#d1c7b7',
  },
  featuresContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    gap: 16,
    marginBottom: 32,
  },
  featureCard: {
    flex: 1,
    height: 180,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 6,
  },
  cardGradient: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  cardIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  tryOnIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  thriftIcon: {
    width: 24,
    height: 24,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2d3436',
    lineHeight: 24,
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#636e72',
    lineHeight: 16,
  },
  secondaryFeatures: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    gap: 12,
    marginBottom: 32,
  },
  secondaryCard: {
    flex: 1,
    height: 100,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  secondaryGradient: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#e8dcc6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  colorIcon: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#a5d6a7',
  },
  sustainIcon: {
    width: 16,
    height: 16,
    borderRadius: 2,
    backgroundColor: '#c8e6c9',
  },
  trendIcon: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#f3e5ab',
  },
  secondaryTitle: {
    fontSize: 11,
    fontWeight: '600',
    color: '#2d3436',
    textAlign: 'center',
    lineHeight: 14,
  },
  trendingSection: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2d3436',
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#a5d6a7',
  },
  trendingScroll: {
    paddingLeft: 24,
  },
  trendingCard: {
    width: 140,
    marginRight: 16,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  trendingGradient: {
    flex: 1,
  },
  trendingImage: {
    height: 100,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: 60,
    height: 80,
    borderRadius: 8,
    backgroundColor: '#e8dcc6',
  },
  trendingInfo: {
    padding: 12,
  },
  trendingPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2d3436',
    marginBottom: 2,
  },
  trendingName: {
    fontSize: 13,
    fontWeight: '500',
    color: '#2d3436',
    marginBottom: 2,
  },
  trendingBrand: {
    fontSize: 11,
    color: '#636e72',
  },
  bottomSpacing: {
    height: 20,
  },
});