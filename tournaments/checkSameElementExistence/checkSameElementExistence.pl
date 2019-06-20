#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub checkSameElementExistence {
    my ($arr1, $arr2) = @_;

    my $len1 = @$arr1;
    my $len2 = @$arr2;
    my $i1 = 0;
    my $i2 = 0;

    while ($len1 > $i1 && $len2 > $i2) {
        if (@$arr1[$i1] < @$arr2[$i2]) {
            ++$i1;
        } elsif (@$arr1[$i1] > @$arr2[$i2]) {
            ++$i2;
        } else {
            return 1;
        }
    }

    return 0;
}
